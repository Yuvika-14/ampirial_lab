const localStrategy = require('passport-local').Strategy; 
const bcrypt = require('bcrypt');
const db = require('./db'); // Assuming you have db connection properly imported

module.exports = function(passport) {
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            if (!email) {
                return done(null, false, { message: 'Invalid email' });
            }
            
            const query = "SELECT * FROM applicants WHERE email = ?";
            db.query(query, [email], (err, result) => {
                if (err) {
                    return done(err); // Return error to passport
                }
                
                if (!result || result.length === 0) {
                    return done(null, false, { message: 'User not found' }); // User not found
                }

                const user = result[0]; // Extract user from the result
                if (!user.password) {
                    return done(null, false, { message: 'No password found for this user' });
                }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return done(err);
                    }
                    
                    if (isMatch) {
                        return done(null, user); // Successfully authenticated
                    } else {
                        return done(null, false, { message: 'Incorrect password' });
                    }
                });
            });
        })
    );

    // Store the user's ID in the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Get the user by ID from the session
    passport.deserializeUser((id, done) => {
        const query = "SELECT * FROM applicants WHERE id = ?";
        db.query(query, [id], (err, result) => {
            if (err) {
                return done(err);
            }
            
            if (!result || result.length === 0) {
                return done(null, false, { message: 'User not found during deserialization' });
            }

            const userInfo = {
                id: result[0].id,
                email: result[0].email
            };
            
            done(null, userInfo);
        });
    });
}

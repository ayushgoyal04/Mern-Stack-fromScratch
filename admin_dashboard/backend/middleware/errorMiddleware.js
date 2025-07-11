
// Global error handling middleware
function errorMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? undefined : err.stack
    });
}

module.exports = errorMiddleware;

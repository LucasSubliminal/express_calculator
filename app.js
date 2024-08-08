const express = require('express');
const app = express();
const { findMean, findMedian, findMode } = require('./calculations');
function errorHandler(err, req, res, next) {
    res.status(500).send({ error: err.message });
}

function validateNums(req, res, next) {
    if (!req.query.nums) {
        return res.status(400).send({ error: "The 'nums' query parameter is required." });
    }
    const nums = req.query.nums.split(',').map(Number);
    if (nums.some(isNaN)) {
        return res.status(400).send({ error: "The 'nums' query parameter must contain only numbers." });
    }
    req.nums = nums;
    next();
}

app.get('/mean', validateNums, (req, res, next) => {
    try {
        const result = findMean(req.nums);
        res.send({ mean: result });
    } catch (err) {
        next(err);
    }
});

app.get('/median', validateNums, (req, res, next) => {
    try {
        const result = findMedian(req.nums);
        res.send({ median: result });
    } catch (err) {
        next(err);
    }
});

app.get('/mode', validateNums, (req, res, next) => {
    try {
        const result = findMode(req.nums);
        res.send({ mode: result });
    } catch (err) {
        next(err);
    }
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

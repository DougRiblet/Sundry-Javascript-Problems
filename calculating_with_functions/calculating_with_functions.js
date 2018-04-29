function zero(cb) { return !cb ? 0 : cb(0) }
function one(cb) { return !cb ? 1 : cb(1) }
function two(cb) { return !cb ? 2 : cb(2) }
function three(cb) { return !cb ? 3 : cb(3) }
function four(cb) { return !cb ? 4 : cb(4) }
function five(cb) { return !cb ? 5 : cb(5) }
function six(cb) { return !cb ? 6 : cb(6) }
function seven(cb) { return !cb ? 7 : cb(7) }
function eight(cb) { return !cb ? 8 : cb(8) }
function nine(cb) { return !cb ? 9 : cb(9) }

function plus(x) { return function(y){return x+y} }
function minus(x) { return function(y){return y-x} }
function times(x) { return function(y){return x*y} }
function dividedBy(x) { return function(y){return y/x} }

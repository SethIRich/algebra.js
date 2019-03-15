var SquareRoot = function(a) {
	/* for now, let's just worry about square roots of non-negative integers */
	this.outer = 1;
	this.inner = a;
};

SquareRoot.prototype.copy = function() {
	var n = new SquareRoot(1); /* can I get away with this? */
	n.outer = this.outer;
	n.inner = this.inner;
	return n;
};

SquareRoot.prototype.reduce = function() {
	var copy = this.copy();
	for (i = Math.floor(Math.sqrt(copy.inner)); i>1; i--) {
		if (copy.inner % Math.pow(i,2) == 0) {
			copy.outer *= i;
			copy.inner /= Math.pow(i,2);
		};
	};
	return copy;
};

SquareRoot.prototype.equalTo = function(r) {
	if (r instanceof SquareRoot) {
		return (this.outer*this.outer*this.inner === r.outer*r.outer*r.inner);
	} else {
		return false;
	};
};

SquareRoot.prototype.multiply = function(r) {
	if (r instanceof SquareRoot) {
		var copy = this.copy();
		copy.inner *= r.inner;
		copy.outer *= r.outer;
	} else {
		/* TODO: Do something here */
	};
};

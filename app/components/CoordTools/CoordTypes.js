function Llh(lat, lon, altM) {
    this.lat = lat;
    this.lon = lon;
    this.altM = altM;

    this.ecef = function() {
        var  llhVec = new Array(3);
        llhVec[0] = this.xM;
        llhVec[1] = this.yM;
        llhVec[2] = this.zM;

        var ecefVec = xyzllh(llhVec);

        return new LLH(llhVec[0], llhVec[1], llhVec[2]);
    }
    this.llh = function() {
        return this.clone();
    }
}

function Ecef(xM, yM, zM) {
    this.xM = xM;
    this.yM = yM;
    this.zM = zM;

    this.ecef = function() {
        return this.clone();
    }
    this.llh = function() {
        var  ecefVec = new Array(3);
        ecefVec[0] = this.xM;
        ecefVec[1] = this.yM;
        ecefVec[2] = this.zM;

        var llhVec = xyzllh(ecefVec);

        return new LLH(llhVec[0], llhVec[1], llhVec[2]);
    }
}
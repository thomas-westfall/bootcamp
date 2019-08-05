function setintersection (s1, s2) {
    let ans = [];
    for(let i = 0; i < s1.length; i++){
        if (s2.find(name => name === s1[i]) !== undefined){
            ans.push(s1[i]);
        }
    }
    return ans;
};

  module.exports = setintersection;
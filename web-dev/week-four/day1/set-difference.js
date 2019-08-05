function setdifference (s1, s2) {
    let ans = [];
    for(let i = 0; i < s1.length; i++){
        if (s2.find(name => name === s1[i]) === undefined){
            ans.push(s1[i]);
        }
    }
    for(let j = 0; j < s2.length; j++){
        if (s1.find(name => name === s2[j]) === undefined){
            ans.push(s2[j]);
        }
    }
    return ans;
};

  module.exports = setdifference;
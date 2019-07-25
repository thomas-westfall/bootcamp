class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        // unordered_map<int,int> u;
        // for(int i = 0; i < nums.size(); i++){
        //     u.insert({i,nums[i]});
        // }
        // for(auto x: u){
        //     if(u.find(x.first()))
        // }
        // return false;
        
        if(nums.empty())
            return false;
        for(int i = 0; i < nums.size() - 1; i++){
            for(int j = i - k; j <= i + k; j++){
                if(j < 0 or j == i)
                    continue;
                if(j >= nums.size())
                    break;
                if(nums[j] == nums[i]){
                    return true;
                }
            }
        }
        return false;
    }
};
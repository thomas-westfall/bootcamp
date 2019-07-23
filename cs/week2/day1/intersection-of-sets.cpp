    #include <iostream>
    #include <vector>
    #include <unordered_set>

    using namespace std;

    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> u;
        unordered_set<int> u2;
        vector<int> ans;
        
        for(int j = 0; j < nums2.size(); j++)
            u2.insert(nums2[j]);
        for(int k = 0; k < nums1.size(); k++)
            if(u2.find(nums1[k]) != u2.end() and u.find(nums1[k]) == u.end()){
                ans.push_back(nums1[k]);
                u.insert(nums1[k]);
            }
        return ans;
    }

    int main(){
        return 0;
    }
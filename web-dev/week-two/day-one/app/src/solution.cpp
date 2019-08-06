    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // sorting string and then int is the group id
        string sorted;
        vector<vector<string>> res;
        unordered_map<string, vector<string>> map;
        for(int i = 0; i < strs.size(); i++) {
            sorted = strs[i];
            sort(sorted.begin(), sorted.end());
            map[sorted].emplace_back(strs[i]);
        }
        
        unordered_map<string, vector<string>>::iterator it;
        for(it = map.begin(); it != map.end(); ++it) {
            res.emplace_back(it->second);  
        }
        return res;
    }
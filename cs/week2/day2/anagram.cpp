    #include <iostream>
    #include <vector>
    #include <unordered_map>

    using namespace std;

    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
        unordered_map<string, vector<string>> u;
        for (int i = 0; i < strs.size(); i++) {
            string current = strs[i];  //current string val
            //figure out what its an anagram of by sorting it
            sort(current.begin(), current.end());
            //push the original string into the vector of the anagram
            u[current].push_back(strs[i]); 
        }
        
        vector<vector<string>> ans;
        std::unordered_map<string, vector<string>>::iterator it = u.begin();
        while(it != u.end()) //for each anagram
            {
                //push vector of strings with this anagram
                ans.push_back(it->second); 
                it++; //iterate
            }
        return ans;
    }


    int main(){
        return 0;
    }
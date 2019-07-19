#include <iostream>
#include <vector>
using namespace std;

vector<int> solution(vector<int> a){
    vector<int> ans;
    bool allnines = true;
    for(int i = a.size() - 1; i > 0; i--){
        if(a[i] == 9){
            ans.insert(ans.begin(),0);
            //a[i-1]++;
        }
        else{
            ans.insert(ans.begin(), a[i] + 1);
            allnines = false;
            //break;
        }
    }
    if(allnines and a[0] == 9){
        ans.insert(ans.begin(), 0);
        ans.insert(ans.begin(), 1);
    }
    else
        ans.insert(ans.begin(), a[0]+ 1);

    return ans;
}

void printvector(vector<int> a){
    cout<<"[";
    for(int i = 0; i < a.size() - 1; i++)
        cout<<a[i]<<",";
    cout<<a[a.size()-1]<<"]"<<endl;
}
int main(){
    vector<int> x;
    x.push_back(8);
    x.push_back(9);
    x.push_back(9);
    x.push_back(9);
    printvector(x);
    printvector(solution(x));

    vector<int> y;

    return 0;
}
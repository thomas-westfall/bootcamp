/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        queue<TreeNode*> qa;
        queue<TreeNode*> qb;
        qa.push(p);
        qb.push(q);
        while(!qa.empty() and !qb.empty()){
            if(qa.front() != qb.front())
                return false;
            if(qa.front()->left != NULL and qb.front()->left != NULL)
                if(qa.front()->left != qb.front()->left)
                    return false;
            if(qa.front()->right != NULL and qb.front()->right != NULL)
                if(qa.front()->right != qb.front()->right)
                    return false;
            
            if(qa.front()->left != NULL)
                qa.push(qa.front()->left);
            if(qa.front()->right != NULL)
                qa.push(qa.front()->right);
            if(qb.front()->left != NULL)
                qb.push(qb.front()->left);
            if(qb.front()->right != NULL)
                qb.push(qb.front()->right);
            qa.pop();
            qb.pop();
        }
        
    return true;
    }
};
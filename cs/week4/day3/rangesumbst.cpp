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
    int rangeSumBST(TreeNode* root, int L, int R) {
        int sum = 0;
        if(root == NULL){
            return 0;
        }
        if(root->val <= R and root->val >= L)
            sum+= root->val;
        return sum + rangeSumBST(root->left, L, R) + rangeSumBST(root->right, L, R);
    }
};
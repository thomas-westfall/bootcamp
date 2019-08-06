#include <queue>
#include <iostream>
#include <vector>

    queue<int> pings;
    int ping(int t) {
        pings.push(t);
        while(!pings.empty())
            if((t - 3000) > pings.front()) //dequeue out of bounds pings
                pings.pop();
        return pings.size();
    }

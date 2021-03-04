function solution(graph, start, end){
    let count = -1;
    let queue = [start];
    let visited = [start]
    while(queue.length !== 0){
        count += 1;
        let size = queue.length;
        for(var i=0; i<size; i++){
            let node = queue.splice(0,1);
            if(node == end){
                return count;
            }

            for(let next_node in graph[node]){
                if(!visited.includes(graph[node][next_node])){
                    visited.push(graph[node][next_node]);
                    queue.push(graph[node][next_node]);
                }
            }
        }
    }
}
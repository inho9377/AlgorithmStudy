//BFS사용 (큐)


function solution(A, start, end){
    let queue = [start];
    let visited = [];
    sol(A, queue, visited, end);
}

function sol(graph, n, visited, end){
    let node = n[n.length-1]; // 큐의 맨 마지막 값
    let length = 0;

    if(node === end){
        return visited.length;
    }

    if(visited.includes(node)){
        return visited.length;
    }
    else{
        visited.push(node);
    }

    let max = [];

    //of는 요소, in은 순서 반환
    for(let next_node in graph[node]){
        n.push(graph[node][next_node]);
        max.push(length, sol(graph, n, visited, end));
        length = Math.max.apply(null, max);

        queue.pop();
    }

    return length;

}
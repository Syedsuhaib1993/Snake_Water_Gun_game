let num = Math.round(Math.random()*2)
let com_ans = ['snake','water','gun'][num]
console.log(com_ans)

let user_ans = prompt('Enter snake gun or water')
if (user_ans==com_ans){
    alert('Draw')
}else if (user_ans=='snake' && com_ans=='water'){
    alert('You Win')

}else if (user_ans=='gun' && com_ans=='snake'){
    alert('You Win')

}else if (user_ans=='water' && com_ans=='gun'){
    alert('You Win')

}else if (user_ans=='water' && com_ans=='snake'){
    alert('You Lose')

}else if (user_ans=='snake' && com_ans=='gun'){
    alert('You Lose')

}else if (user_ans=='gun' && com_ans=='water'){
    alert('You Lose')
    
}else {
    alert('try again')
}
let div=document.createElement('div');div.id='id';div.className='cls_name';div.textContent="Waste Food Management System";div.style.color="red";
let p=document.getElementById('heading');
p.appendChild(div);
console.log(p);
let input=document.createElement('input');input.id='input_id';input.className='input_cls';input.type="text";input.style.color="blue";
function insertAfter(newNode,existingNode)
{
    existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling);
}
input.addEventListener('mouseleave',function()
{
    div.textContent=input.value;
    input.replaceWith(div);
})
div.addEventListener('click',function()
{
    input.textContent=input.value;
    console.log(input);
    div.textContent=input.textContent;
    console.log(p);
    console.log("value:"+p.textContent);
    insertAfter(input,heading.lastElementChild);
})

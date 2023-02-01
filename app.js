const app=document.getElementById("Appoint");

        app.addEventListener('submit',additm);

function additm(e)
{
    e.preventDefault();
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;

    var obj={
          n:name,
          p:phone,
          e:email,
    };
localStorage.setItem(`${email}`,JSON.stringify(obj));
//creating a component to add in Table
var tbl=document.getElementById('items');
var tr=document.createElement("tr");
var name1=document.createElement("td");
var email1=document.createElement("td");
var phone1=document.createElement("td");
var btn=document.createElement("button");
btn.classList="delete";
tr.appendChild(name1);
tr.appendChild(email1);
tr.appendChild(phone1);
tr.appendChild(document.createElement("td").appendChild(btn));

name1.appendChild(document.createTextNode(name));
email1.appendChild(document.createTextNode(email));
phone1.appendChild(document.createTextNode(phone));
btn.appendChild(document.createTextNode("Remove"));
tbl.appendChild(tr);

};

const itemList=document.getElementById("items");
// Delete Event 
itemList.addEventListener('click',deleList);
function deleList(e)
{
  if(e.target.classList.contains('delete'))
  {
   if(confirm("Are you sure?"))
   {
 
    var tr=e.target.parentElement;
   var temp=tr.children[1].textContent;
 localStorage.removeItem(temp);
    itemList.removeChild(tr);
   }
  }
}
// absolute w-full left-0 px-1 top-14  divide-gray-900 divide-y-2  bg-slate-600
const menu = document.querySelector('.menu');
const humbuger = document.querySelector('.humbuger');

menu.addEventListener('click',displayMenu);
humbuger.addEventListener('click',displayMenu);

const bar= document.querySelector('#bar');
const tutup = document.querySelector('#close');


function displayMenu(){
    if(menu.classList.contains('absolute')){
        bar.style.display='inline';
        tutup.style.display='none';
        menu.classList.add('hidden');
        menu.classList.remove('absolute');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('px-1');
        menu.classList.remove('top-18');
        menu.classList.remove('divide-gray-900');
        menu.classList.remove('divide-y-2');
        menu.classList.remove('bg-slate-600');
 
       

    }else{
        bar.style.display='none';
        tutup.style.display='inline';
        menu.classList.remove('hidden');
        menu.classList.add('absolute');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('px-1');
        menu.classList.add('top-18');
        menu.classList.add('divide-gray-900');
        menu.classList.add('divide-y-2');
        menu.classList.add('bg-slate-600');

    }
}
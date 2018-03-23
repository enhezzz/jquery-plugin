function spin(ele){
    var ele = ele instanceof $? ele : $(ele);
    window.onscroll = function(){
        // console.log(document.documentElement.scrollTop >=   nav.offsetTop)
        if(document.documentElement.scrollTop >=   ele[0].offsetTop){
            // ele[0].classList.add('fix');
            if(getStyle(ele[0],'width'))
            ele[0].style.width = '100%';
            ele[0].style.position = 'fixed';
            ele[0].style.top = '0px';

            ele.next()[0].style.marginTop = ele[0].offsetHeight+ 'px'
        }
    
         
         if(ele.next()[0].offsetTop - ele[0].offsetHeight >= document.documentElement.scrollTop){
            ele.next()[0].style.marginTop = 0;
            // ele[0].style.width = '100%';
            ele[0].style.position = 'static';
            // ele[0].style.top = '0px';
            // ele[0].classList.remove('fix')
        }
        console.log(ele.next()[0].offsetTop - ele[0].offsetHeight >= document.documentElement.scrollTop)
        
    }
}
function getStyle(obj, attr)  
{  
    if(obj.currentStyle)  
    {  
        return obj.currentStyle[attr];  
    }  
    else  
    {  
        return getComputedStyle(obj,false)[attr];  
    }  
}  

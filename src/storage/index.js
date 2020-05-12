/**
 * storage封装
 * 项目里面使用的是ES6的规范
 * 希望全局只有一个名字,所以用const来声明
 * 作为key.
 */
const STORAGE_KEY = 'mail';
export default{
    //存储值,重点API 
    setItem(key,value,module_name){
        //判断参数有无串module_name
        if(module_name){
            //把新传进来的module_name当作新的key当作参数传给getItem,获取模块对象,如果该模块不存在则此时对象只有key没有值,如果modoule_name为原有元素则返回原有模块值
            let val= this.getItem(module_name);
            //为新的modoule_name赋值,这样我们就可以多一个模块了与user平级.或者为原有模块添加值, 在user中添加了一个新得key和新的值
            val[key]=value;
            //调用setItem方法,把modoule_name当作key递归传给setItem方法进else分支
            this.setItem(module_name,val);
        }else{
            //首先获取sessionStorage的所有值
            let val=this.getStorage();
            //新增加模块key,并未key赋值val,如果key原本就存在则覆盖.
            val[key]=value;
            //把val转换为json串,调用sessionStorage的原生API setItem覆盖进storage原mail中
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
       
    },
    //获取值可以获取某个模块里面的值,也可以获取整个mail得值
    //举例:mail里面的全部值,或者mail里面的user的值,或abc的值.   key:mail  value: {"user":{"username":"jx","age":18,"salary":"20000"},"abc":{"age":18}}
    getItem(key,module_name){
        //如果给定单个模块的值,就递归获取单个模块的值
        if(module_name){
            let val= this.getItem(module_name);
            if(val)return val[key];
        }
        //获取mail里面对应的模块的值
        return this.getStorage()[key];
    },
    //获取所有的storage里面的mail值重点API
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    //能够实现单个删除storage
    clear(key,module_name){
        let val=this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}

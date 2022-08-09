AFRAME.registerComponent("move-box",{
    schema:{
        move:{type:"number",default:1}
    },
    tick:function(){
        this.data.move=this.data.move+0.01
        var pos=this.el.getAttribute("position")
        pos.x=this.data.move
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
    
})
class ROPE{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA=bodyA;
        this.pointB = pointB;
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var posa=this.sling.bodyA.position;
            var posb=this.pointB;
    
            strokeWeight(2);
            line (posa.x,posa.y,posb.x,posb.y);
        }
    }
    
}
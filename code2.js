gdjs.BossCode = {};
gdjs.BossCode.localVariables = [];
gdjs.BossCode.idToCallbackMap = new Map();
gdjs.BossCode.GDGroundObjects1= [];
gdjs.BossCode.GDGroundObjects2= [];
gdjs.BossCode.GDGroundObjects3= [];
gdjs.BossCode.GDPlayerObjects1= [];
gdjs.BossCode.GDPlayerObjects2= [];
gdjs.BossCode.GDPlayerObjects3= [];
gdjs.BossCode.GDBossObjects1= [];
gdjs.BossCode.GDBossObjects2= [];
gdjs.BossCode.GDBossObjects3= [];
gdjs.BossCode.GDBoss_9595ModelObjects1= [];
gdjs.BossCode.GDBoss_9595ModelObjects2= [];
gdjs.BossCode.GDBoss_9595ModelObjects3= [];
gdjs.BossCode.GDBossBarrierObjects1= [];
gdjs.BossCode.GDBossBarrierObjects2= [];
gdjs.BossCode.GDBossBarrierObjects3= [];


gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.BossCode.GDPlayerObjects2});
gdjs.BossCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14795524);
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.BossCode.GDPlayerObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDPlayerObjects2Objects, 107, 314, "");
}
}

}


};gdjs.BossCode.asyncCallback14794916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BossCode.localVariables);

{ //Subevents
gdjs.BossCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BossCode.localVariables.length = 0;
}
gdjs.BossCode.idToCallbackMap.set(14794916, gdjs.BossCode.asyncCallback14794916);
gdjs.BossCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BossCode.localVariables);
for (const obj of gdjs.BossCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BossCode.asyncCallback14794916(runtimeScene, asyncObjectsList)), 14794916, asyncObjectsList);
}
}

}


};gdjs.BossCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDPlayerObjects2[i].getBehavior("Object3D").getZ() < -1000 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDPlayerObjects2[k] = gdjs.BossCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14794756);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.BossCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.BossCode.GDPlayerObjects2});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBossObjects2Objects = Hashtable.newFrom({"Boss": gdjs.BossCode.GDBossObjects2});
gdjs.BossCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14804956);
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBossObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Animation").setAnimationName("got hit");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].returnVariable(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(2)).sub(1);
}
}
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.BossCode.GDPlayerObjects2});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBossObjects2Objects = Hashtable.newFrom({"Boss": gdjs.BossCode.GDBossObjects2});
gdjs.BossCode.asyncCallback14810348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BossCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Boss"), gdjs.BossCode.GDBossObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects3);

{for(var i = 0, len = gdjs.BossCode.GDBossObjects3.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects3.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects3[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage selection", false);
}
gdjs.BossCode.localVariables.length = 0;
}
gdjs.BossCode.idToCallbackMap.set(14810348, gdjs.BossCode.asyncCallback14810348);
gdjs.BossCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BossCode.localVariables);
for (const obj of gdjs.BossCode.GDBossObjects2) asyncObjectsList.addObject("Boss", obj);
for (const obj of gdjs.BossCode.GDBoss_9595ModelObjects2) asyncObjectsList.addObject("Boss_Model", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.BossCode.asyncCallback14810348(runtimeScene, asyncObjectsList)), 14810348, asyncObjectsList);
}
}

}


};gdjs.BossCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBoss_9595ModelObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Animation").getAnimationName() == "got hit" ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBoss_9595ModelObjects2[k] = gdjs.BossCode.GDBoss_9595ModelObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBoss_9595ModelObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBoss_9595ModelObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBoss_9595ModelObjects2[k] = gdjs.BossCode.GDBoss_9595ModelObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBoss_9595ModelObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBoss_9595ModelObjects2 */
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getVariableBoolean(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBossObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].getBehavior("Physics3D").applyForceAtCenter((gdjs.RuntimeObject.getVariableNumber(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(0))) * Math.cos(Math.atan2((( gdjs.BossCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDPlayerObjects2[0].getY()) - (gdjs.BossCode.GDBossObjects2[i].getY()), (( gdjs.BossCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDPlayerObjects2[0].getX()) - (gdjs.BossCode.GDBossObjects2[i].getX()))), (gdjs.RuntimeObject.getVariableNumber(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(0))) * Math.sin(Math.atan2((( gdjs.BossCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDPlayerObjects2[0].getY()) - (gdjs.BossCode.GDBossObjects2[i].getY()), (( gdjs.BossCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDPlayerObjects2[0].getX()) - (gdjs.BossCode.GDBossObjects2[i].getX()))), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getVariableBoolean(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDPlayerObjects2Objects, "Physics3D", gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBossObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDPlayerObjects2[i].getBehavior("Object3D").getCenterZInScene() > (( gdjs.BossCode.GDBossObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBossObjects2[0].getBehavior("Object3D").getCenterZInScene()) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDPlayerObjects2[k] = gdjs.BossCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.BossCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").setCanJump();
}
}
{for(var i = 0, len = gdjs.BossCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").setJumpSpeed(600);
}
}
{for(var i = 0, len = gdjs.BossCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}

{ //Subevents
gdjs.BossCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getVariableBoolean(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDPlayerObjects2Objects, "Physics3D", gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBossObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDPlayerObjects2[i].getBehavior("Object3D").getCenterZInScene() <= (( gdjs.BossCode.GDBossObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBossObjects2[0].getBehavior("Object3D").getCenterZInScene()) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDPlayerObjects2[k] = gdjs.BossCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getVariableNumber(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14808092);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBossObjects2 */
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].returnVariable(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getVariableBoolean(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBossObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].getBehavior("Physics3D").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].getBehavior("Physics3D").setLinearVelocityY(0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].getBehavior("Physics3D").setLinearVelocityZ(0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Animation").setAnimationName("death");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].getBehavior("Physics3D").enableMask(5, false);
}
}

{ //Subevents
gdjs.BossCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);
gdjs.copyArray(runtimeScene.getObjects("BossBarrier"), gdjs.BossCode.GDBossBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].setCenterPositionInScene((( gdjs.BossCode.GDBossObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBossObjects2[0].getCenterXInScene()),(( gdjs.BossCode.GDBossObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBossObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].getBehavior("Object3D").setZ((( gdjs.BossCode.GDBossObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBossObjects2[0].getBehavior("Object3D").getCenterZInScene()));
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossBarrierObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossBarrierObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].setX(588);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].setY(272);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getVariableBoolean(gdjs.BossCode.GDBossObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boss_Model"), gdjs.BossCode.GDBoss_9595ModelObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.BossCode.GDBoss_9595ModelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBoss_9595ModelObjects2[i].rotateTowardObject((gdjs.BossCode.GDPlayerObjects2.length !== 0 ? gdjs.BossCode.GDPlayerObjects2[0] : null), 0, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects2.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects2[i].getX() <= 30 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects2[k] = gdjs.BossCode.GDBossObjects2[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBossObjects2 */
{for(var i = 0, len = gdjs.BossCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects2[i].getBehavior("Physics3D").setAngularVelocityX(-200000);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.BossCode.GDBossObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossObjects1[i].getX() >= 1250 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBossObjects1[k] = gdjs.BossCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBossObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBossObjects1[i].getBehavior("Physics3D").setAngularVelocityX(-200000);
}
}
}

}


};gdjs.BossCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDPlayerObjects1[k] = gdjs.BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setJumpSpeed(800);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BossCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setJumpSpeed(800);
}
}
}

}


{


gdjs.BossCode.eventsList2(runtimeScene);
}


{


gdjs.BossCode.eventsList5(runtimeScene);
}


};

gdjs.BossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BossCode.GDGroundObjects1.length = 0;
gdjs.BossCode.GDGroundObjects2.length = 0;
gdjs.BossCode.GDGroundObjects3.length = 0;
gdjs.BossCode.GDPlayerObjects1.length = 0;
gdjs.BossCode.GDPlayerObjects2.length = 0;
gdjs.BossCode.GDPlayerObjects3.length = 0;
gdjs.BossCode.GDBossObjects1.length = 0;
gdjs.BossCode.GDBossObjects2.length = 0;
gdjs.BossCode.GDBossObjects3.length = 0;
gdjs.BossCode.GDBoss_9595ModelObjects1.length = 0;
gdjs.BossCode.GDBoss_9595ModelObjects2.length = 0;
gdjs.BossCode.GDBoss_9595ModelObjects3.length = 0;
gdjs.BossCode.GDBossBarrierObjects1.length = 0;
gdjs.BossCode.GDBossBarrierObjects2.length = 0;
gdjs.BossCode.GDBossBarrierObjects3.length = 0;

gdjs.BossCode.eventsList6(runtimeScene);
gdjs.BossCode.GDGroundObjects1.length = 0;
gdjs.BossCode.GDGroundObjects2.length = 0;
gdjs.BossCode.GDGroundObjects3.length = 0;
gdjs.BossCode.GDPlayerObjects1.length = 0;
gdjs.BossCode.GDPlayerObjects2.length = 0;
gdjs.BossCode.GDPlayerObjects3.length = 0;
gdjs.BossCode.GDBossObjects1.length = 0;
gdjs.BossCode.GDBossObjects2.length = 0;
gdjs.BossCode.GDBossObjects3.length = 0;
gdjs.BossCode.GDBoss_9595ModelObjects1.length = 0;
gdjs.BossCode.GDBoss_9595ModelObjects2.length = 0;
gdjs.BossCode.GDBoss_9595ModelObjects3.length = 0;
gdjs.BossCode.GDBossBarrierObjects1.length = 0;
gdjs.BossCode.GDBossBarrierObjects2.length = 0;
gdjs.BossCode.GDBossBarrierObjects3.length = 0;


return;

}

gdjs['BossCode'] = gdjs.BossCode;

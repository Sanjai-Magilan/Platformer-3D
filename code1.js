gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.idToCallbackMap = new Map();
gdjs.StartCode.forEachIndex2 = 0;

gdjs.StartCode.forEachIndex3 = 0;

gdjs.StartCode.forEachObjects2 = [];

gdjs.StartCode.forEachObjects3 = [];

gdjs.StartCode.forEachTemporary2 = null;

gdjs.StartCode.forEachTemporary3 = null;

gdjs.StartCode.forEachTotalCount2 = 0;

gdjs.StartCode.forEachTotalCount3 = 0;

gdjs.StartCode.GDGroundObjects1= [];
gdjs.StartCode.GDGroundObjects2= [];
gdjs.StartCode.GDGroundObjects3= [];
gdjs.StartCode.GDGroundObjects4= [];
gdjs.StartCode.GDGroundObjects5= [];
gdjs.StartCode.GDGroundObjects6= [];
gdjs.StartCode.GDPlayerObjects1= [];
gdjs.StartCode.GDPlayerObjects2= [];
gdjs.StartCode.GDPlayerObjects3= [];
gdjs.StartCode.GDPlayerObjects4= [];
gdjs.StartCode.GDPlayerObjects5= [];
gdjs.StartCode.GDPlayerObjects6= [];
gdjs.StartCode.GDCoinObjects1= [];
gdjs.StartCode.GDCoinObjects2= [];
gdjs.StartCode.GDCoinObjects3= [];
gdjs.StartCode.GDCoinObjects4= [];
gdjs.StartCode.GDCoinObjects5= [];
gdjs.StartCode.GDCoinObjects6= [];
gdjs.StartCode.GDMovingPlatFormObjects1= [];
gdjs.StartCode.GDMovingPlatFormObjects2= [];
gdjs.StartCode.GDMovingPlatFormObjects3= [];
gdjs.StartCode.GDMovingPlatFormObjects4= [];
gdjs.StartCode.GDMovingPlatFormObjects5= [];
gdjs.StartCode.GDMovingPlatFormObjects6= [];
gdjs.StartCode.GDLava_9595BlockObjects1= [];
gdjs.StartCode.GDLava_9595BlockObjects2= [];
gdjs.StartCode.GDLava_9595BlockObjects3= [];
gdjs.StartCode.GDLava_9595BlockObjects4= [];
gdjs.StartCode.GDLava_9595BlockObjects5= [];
gdjs.StartCode.GDLava_9595BlockObjects6= [];
gdjs.StartCode.GDdashPlatFormObjects1= [];
gdjs.StartCode.GDdashPlatFormObjects2= [];
gdjs.StartCode.GDdashPlatFormObjects3= [];
gdjs.StartCode.GDdashPlatFormObjects4= [];
gdjs.StartCode.GDdashPlatFormObjects5= [];
gdjs.StartCode.GDdashPlatFormObjects6= [];
gdjs.StartCode.GDMoving_9595LavaObjects1= [];
gdjs.StartCode.GDMoving_9595LavaObjects2= [];
gdjs.StartCode.GDMoving_9595LavaObjects3= [];
gdjs.StartCode.GDMoving_9595LavaObjects4= [];
gdjs.StartCode.GDMoving_9595LavaObjects5= [];
gdjs.StartCode.GDMoving_9595LavaObjects6= [];
gdjs.StartCode.GDCheckPointObjects1= [];
gdjs.StartCode.GDCheckPointObjects2= [];
gdjs.StartCode.GDCheckPointObjects3= [];
gdjs.StartCode.GDCheckPointObjects4= [];
gdjs.StartCode.GDCheckPointObjects5= [];
gdjs.StartCode.GDCheckPointObjects6= [];
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1= [];
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2= [];
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects3= [];
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects4= [];
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects5= [];
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects6= [];
gdjs.StartCode.GDOrcObjects1= [];
gdjs.StartCode.GDOrcObjects2= [];
gdjs.StartCode.GDOrcObjects3= [];
gdjs.StartCode.GDOrcObjects4= [];
gdjs.StartCode.GDOrcObjects5= [];
gdjs.StartCode.GDOrcObjects6= [];
gdjs.StartCode.GDOrc_9595ModelObjects1= [];
gdjs.StartCode.GDOrc_9595ModelObjects2= [];
gdjs.StartCode.GDOrc_9595ModelObjects3= [];
gdjs.StartCode.GDOrc_9595ModelObjects4= [];
gdjs.StartCode.GDOrc_9595ModelObjects5= [];
gdjs.StartCode.GDOrc_9595ModelObjects6= [];
gdjs.StartCode.GDGemObjects1= [];
gdjs.StartCode.GDGemObjects2= [];
gdjs.StartCode.GDGemObjects3= [];
gdjs.StartCode.GDGemObjects4= [];
gdjs.StartCode.GDGemObjects5= [];
gdjs.StartCode.GDGemObjects6= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.StartCode.GDCoinObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.StartCode.GDCoinObjects2);
{for(var i = 0, len = gdjs.StartCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDCoinObjects2[i].setAngle(gdjs.StartCode.GDCoinObjects2[i].getAngle() + (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.StartCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects, "Object3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDCoinObjects1Objects, "Object3D", false, null);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MovingPlatForm"), gdjs.StartCode.GDMovingPlatFormObjects2);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatForm_UpDown"), gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2);
{for(var i = 0, len = gdjs.StartCode.GDMovingPlatFormObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMovingPlatFormObjects2[i].returnVariable(gdjs.StartCode.GDMovingPlatFormObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.StartCode.GDMovingPlatFormObjects2[i].getX()));
}
}
{for(var i = 0, len = gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2[i].returnVariable(gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2[i].getZ()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MovingPlatForm"), gdjs.StartCode.GDMovingPlatFormObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatForm_UpDown"), gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1);
{for(var i = 0, len = gdjs.StartCode.GDMovingPlatFormObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMovingPlatFormObjects1[i].setX((gdjs.RuntimeObject.getVariableNumber(gdjs.StartCode.GDMovingPlatFormObjects1[i].getVariables().getFromIndex(0))) + 200 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1));
}
}
{for(var i = 0, len = gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1[i].getBehavior("Object3D").setZ((gdjs.RuntimeObject.getVariableNumber(gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1[i].getVariables().getFromIndex(0))) + 200 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1));
}
}
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Moving_Lava"), gdjs.StartCode.GDMoving_9595LavaObjects2);
gdjs.copyArray(runtimeScene.getObjects("dashPlatForm"), gdjs.StartCode.GDdashPlatFormObjects2);
{for(var i = 0, len = gdjs.StartCode.GDdashPlatFormObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDdashPlatFormObjects2[i].returnVariable(gdjs.StartCode.GDdashPlatFormObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.StartCode.GDdashPlatFormObjects2[i].getY()));
}
}
{for(var i = 0, len = gdjs.StartCode.GDMoving_9595LavaObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDMoving_9595LavaObjects2[i].returnVariable(gdjs.StartCode.GDMoving_9595LavaObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.StartCode.GDMoving_9595LavaObjects2[i].getY()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Moving_Lava"), gdjs.StartCode.GDMoving_9595LavaObjects1);
gdjs.copyArray(runtimeScene.getObjects("dashPlatForm"), gdjs.StartCode.GDdashPlatFormObjects1);
{for(var i = 0, len = gdjs.StartCode.GDdashPlatFormObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDdashPlatFormObjects1[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.StartCode.GDdashPlatFormObjects1[i].getVariables().getFromIndex(0))) + 320 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2));
}
}
{for(var i = 0, len = gdjs.StartCode.GDMoving_9595LavaObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMoving_9595LavaObjects1[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.StartCode.GDMoving_9595LavaObjects1[i].getVariables().getFromIndex(0))) + 320 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLava_95959595BlockObjects2Objects = Hashtable.newFrom({"Lava_Block": gdjs.StartCode.GDLava_9595BlockObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMoving_95959595LavaObjects2Objects = Hashtable.newFrom({"Moving_Lava": gdjs.StartCode.GDMoving_9595LavaObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDCheckPointObjects2Objects = Hashtable.newFrom({"CheckPoint": gdjs.StartCode.GDCheckPointObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects4});
gdjs.StartCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14672036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.StartCode.GDPlayerObjects4);

{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
}

}


};gdjs.StartCode.asyncCallback14671596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartCode.localVariables);

{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.StartCode.localVariables.length = 0;
}
gdjs.StartCode.idToCallbackMap.set(14671596, gdjs.StartCode.asyncCallback14671596);
gdjs.StartCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartCode.localVariables);
for (const obj of gdjs.StartCode.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartCode.asyncCallback14671596(runtimeScene, asyncObjectsList)), 14671596, asyncObjectsList);
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrcObjects2Objects = Hashtable.newFrom({"Orc": gdjs.StartCode.GDOrcObjects2});
gdjs.StartCode.eventsList5 = function(runtimeScene) {

};gdjs.StartCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Orc"), gdjs.StartCode.GDOrcObjects1);

for (gdjs.StartCode.forEachIndex2 = 0;gdjs.StartCode.forEachIndex2 < gdjs.StartCode.GDOrcObjects1.length;++gdjs.StartCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.StartCode.GDOrcObjects2.length = 0;


gdjs.StartCode.forEachTemporary2 = gdjs.StartCode.GDOrcObjects1[gdjs.StartCode.forEachIndex2];
gdjs.StartCode.GDOrcObjects2.push(gdjs.StartCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDOrcObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDOrcObjects2[i].getVariableBoolean(gdjs.StartCode.GDOrcObjects2[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDOrcObjects2[k] = gdjs.StartCode.GDOrcObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDOrcObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects, "Physics3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrcObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("Object3D").getCenterZInScene() <= (( gdjs.StartCode.GDOrcObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects2[0].getBehavior("Object3D").getCenterZInScene()) + 30 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14673980);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}
}

}


};gdjs.StartCode.eventsList7 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Lava_Block"), gdjs.StartCode.GDLava_9595BlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLava_95959595BlockObjects2Objects, "Object3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects, "Object3D", false, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14667164);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moving_Lava"), gdjs.StartCode.GDMoving_9595LavaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDMoving_95959595LavaObjects2Objects, "Object3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects, "Object3D", false, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14668100);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("Object3D").getZ() < -1000 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckPoint"), gdjs.StartCode.GDCheckPointObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects2Objects, "Object3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDCheckPointObjects2Objects, "Object3D", false, null);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDCheckPointObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.StartCode.GDCheckPointObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDCheckPointObjects2[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.StartCode.GDCheckPointObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDCheckPointObjects2[0].getY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.StartCode.GDCheckPointObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDCheckPointObjects2[0].getZ()));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14671404);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.StartCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.StartCode.eventsList6(runtimeScene);
}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrc_95959595ModelObjects3Objects = Hashtable.newFrom({"Orc_Model": gdjs.StartCode.GDOrc_9595ModelObjects3});
gdjs.StartCode.eventsList8 = function(runtimeScene) {

};gdjs.StartCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Orc"), gdjs.StartCode.GDOrcObjects2);

for (gdjs.StartCode.forEachIndex3 = 0;gdjs.StartCode.forEachIndex3 < gdjs.StartCode.GDOrcObjects2.length;++gdjs.StartCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Orc_Model"), gdjs.StartCode.GDOrc_9595ModelObjects3);
gdjs.StartCode.GDOrcObjects3.length = 0;


gdjs.StartCode.forEachTemporary3 = gdjs.StartCode.GDOrcObjects2[gdjs.StartCode.forEachIndex3];
gdjs.StartCode.GDOrcObjects3.push(gdjs.StartCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects3[i].returnVariable(gdjs.StartCode.GDOrcObjects3[i].getVariables().getFromIndex(0)).setNumber((gdjs.StartCode.GDOrcObjects3[i].getY()));
}
}
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects3[i].returnVariable(gdjs.StartCode.GDOrcObjects3[i].getVariables().getFromIndex(1)).setNumber((gdjs.StartCode.GDOrcObjects3[i].getY()));
}
}
{gdjs.evtTools.linkedObjects.removeAllLinksOf(runtimeScene, (gdjs.StartCode.GDOrcObjects3.length !== 0 ? gdjs.StartCode.GDOrcObjects3[0] : null));
}
{gdjs.evtTools.object.pickNearestObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrc_95959595ModelObjects3Objects, (( gdjs.StartCode.GDOrcObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects3[0].getX()), (( gdjs.StartCode.GDOrcObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects3[0].getY()));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.StartCode.GDOrcObjects3.length !== 0 ? gdjs.StartCode.GDOrcObjects3[0] : null), (gdjs.StartCode.GDOrc_9595ModelObjects3.length !== 0 ? gdjs.StartCode.GDOrc_9595ModelObjects3[0] : null));
}
}
}

}


};gdjs.StartCode.eventsList10 = function(runtimeScene) {

};gdjs.StartCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Orc"), gdjs.StartCode.GDOrcObjects2);

for (gdjs.StartCode.forEachIndex3 = 0;gdjs.StartCode.forEachIndex3 < gdjs.StartCode.GDOrcObjects2.length;++gdjs.StartCode.forEachIndex3) {
gdjs.StartCode.GDOrcObjects3.length = 0;


gdjs.StartCode.forEachTemporary3 = gdjs.StartCode.GDOrcObjects2[gdjs.StartCode.forEachIndex3];
gdjs.StartCode.GDOrcObjects3.push(gdjs.StartCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects3[i].hide();
}
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrc_95959595ModelObjects2Objects = Hashtable.newFrom({"Orc_Model": gdjs.StartCode.GDOrc_9595ModelObjects2});
gdjs.StartCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDOrcObjects2, gdjs.StartCode.GDOrcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.StartCode.GDOrcObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects3[0].getY()) < ((gdjs.StartCode.GDOrcObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StartCode.GDOrcObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartCode.GDOrc_9595ModelObjects2, gdjs.StartCode.GDOrc_9595ModelObjects3);

{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects3[i].getBehavior("Tween").removeTween("Orc_Rotate");
}
}
{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects3[i].getBehavior("Tween").addObjectAngleTween2("Orc_Rotate", 270, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.12, false);
}
}
}

}


{

gdjs.copyArray(gdjs.StartCode.GDOrcObjects2, gdjs.StartCode.GDOrcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.StartCode.GDOrcObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects3[0].getY()) > ((gdjs.StartCode.GDOrcObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StartCode.GDOrcObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartCode.GDOrc_9595ModelObjects2, gdjs.StartCode.GDOrc_9595ModelObjects3);

{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects3[i].getBehavior("Tween").removeTween("Orc_Rotate");
}
}
{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects3[i].getBehavior("Tween").addObjectAngleTween2("Orc_Rotate", 90, runtimeScene.getGame().getNamedEasingsManager().resolve("linear", ""), 0.12, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.StartCode.GDOrcObjects2, gdjs.StartCode.GDOrcObjects3);

{for(var i = 0, len = gdjs.StartCode.GDOrcObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects3[i].returnVariable(gdjs.StartCode.GDOrcObjects3[i].getVariables().getFromIndex(1)).setNumber((gdjs.StartCode.GDOrcObjects3[i].getY()));
}
}
}

}


};gdjs.StartCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Orc"), gdjs.StartCode.GDOrcObjects1);

for (gdjs.StartCode.forEachIndex2 = 0;gdjs.StartCode.forEachIndex2 < gdjs.StartCode.GDOrcObjects1.length;++gdjs.StartCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Orc_Model"), gdjs.StartCode.GDOrc_9595ModelObjects2);
gdjs.StartCode.GDOrcObjects2.length = 0;


gdjs.StartCode.forEachTemporary2 = gdjs.StartCode.GDOrcObjects1[gdjs.StartCode.forEachIndex2];
gdjs.StartCode.GDOrcObjects2.push(gdjs.StartCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDOrcObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDOrcObjects2[i].getVariableBoolean(gdjs.StartCode.GDOrcObjects2[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDOrcObjects2[k] = gdjs.StartCode.GDOrcObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDOrcObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects2[i].setY((gdjs.RuntimeObject.getVariableNumber(gdjs.StartCode.GDOrcObjects2[i].getVariables().getFromIndex(0))) + 140 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.5));
}
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrc_95959595ModelObjects2Objects, (gdjs.StartCode.GDOrcObjects2.length !== 0 ? gdjs.StartCode.GDOrcObjects2[0] : null), null);
}
{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects2[i].setCenterPositionInScene((( gdjs.StartCode.GDOrcObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects2[0].getCenterXInScene()),(( gdjs.StartCode.GDOrcObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects2[i].getBehavior("Object3D").setZ((( gdjs.StartCode.GDOrcObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects2[0].getBehavior("Object3D").getCenterZInScene()) - 50);
}
}
{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}

{ //Subevents: 
gdjs.StartCode.eventsList12(runtimeScene);} //Subevents end.
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects3});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrcObjects3Objects = Hashtable.newFrom({"Orc": gdjs.StartCode.GDOrcObjects3});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrc_95959595ModelObjects3Objects = Hashtable.newFrom({"Orc_Model": gdjs.StartCode.GDOrc_9595ModelObjects3});
gdjs.StartCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("Orc"), gdjs.StartCode.GDOrcObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("Orc_Model"), gdjs.StartCode.GDOrc_9595ModelObjects5);

{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects5.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects5[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects5.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects5[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.StartCode.asyncCallback14686100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartCode.localVariables);

{ //Subevents
gdjs.StartCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.StartCode.localVariables.length = 0;
}
gdjs.StartCode.idToCallbackMap.set(14686100, gdjs.StartCode.asyncCallback14686100);
gdjs.StartCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartCode.localVariables);
for (const obj of gdjs.StartCode.GDOrcObjects3) asyncObjectsList.addObject("Orc", obj);
for (const obj of gdjs.StartCode.GDOrc_9595ModelObjects3) asyncObjectsList.addObject("Orc_Model", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.StartCode.asyncCallback14686100(runtimeScene, asyncObjectsList)), 14686100, asyncObjectsList);
}
}

}


};gdjs.StartCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.StartCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList17 = function(runtimeScene) {

};gdjs.StartCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Orc"), gdjs.StartCode.GDOrcObjects2);

for (gdjs.StartCode.forEachIndex3 = 0;gdjs.StartCode.forEachIndex3 < gdjs.StartCode.GDOrcObjects2.length;++gdjs.StartCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Orc_Model"), gdjs.StartCode.GDOrc_9595ModelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects3);
gdjs.StartCode.GDOrcObjects3.length = 0;


gdjs.StartCode.forEachTemporary3 = gdjs.StartCode.GDOrcObjects2[gdjs.StartCode.forEachIndex3];
gdjs.StartCode.GDOrcObjects3.push(gdjs.StartCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDOrcObjects3.length;i<l;++i) {
    if ( gdjs.StartCode.GDOrcObjects3[i].getVariableBoolean(gdjs.StartCode.GDOrcObjects3[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDOrcObjects3[k] = gdjs.StartCode.GDOrcObjects3[i];
        ++k;
    }
}
gdjs.StartCode.GDOrcObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects3Objects, "Physics3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrcObjects3Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects3[i].getBehavior("Object3D").getCenterZInScene() > (( gdjs.StartCode.GDOrcObjects3.length === 0 ) ? 0 :gdjs.StartCode.GDOrcObjects3[0].getBehavior("Object3D").getCenterZInScene()) + 30 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPlayerObjects3[k] = gdjs.StartCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects3.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects3[i].returnVariable(gdjs.StartCode.GDOrcObjects3[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setCanJump();
}
}
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setJumpSpeed(600);
}
}
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDOrc_95959595ModelObjects3Objects, (gdjs.StartCode.GDOrcObjects3.length !== 0 ? gdjs.StartCode.GDOrcObjects3[0] : null), null);
}
{for(var i = 0, len = gdjs.StartCode.GDOrc_9595ModelObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDOrc_9595ModelObjects3[i].getBehavior("Animation").setAnimationName("Death");
}
}

{ //Subevents: 
gdjs.StartCode.eventsList16(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Orc"), gdjs.StartCode.GDOrcObjects1);

for (gdjs.StartCode.forEachIndex2 = 0;gdjs.StartCode.forEachIndex2 < gdjs.StartCode.GDOrcObjects1.length;++gdjs.StartCode.forEachIndex2) {
gdjs.StartCode.GDOrcObjects2.length = 0;


gdjs.StartCode.forEachTemporary2 = gdjs.StartCode.GDOrcObjects1[gdjs.StartCode.forEachIndex2];
gdjs.StartCode.GDOrcObjects2.push(gdjs.StartCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDOrcObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDOrcObjects2[i].getVariableBoolean(gdjs.StartCode.GDOrcObjects2[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDOrcObjects2[k] = gdjs.StartCode.GDOrcObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDOrcObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.StartCode.GDOrcObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDOrcObjects2[i].getBehavior("Physics3D").enableMask(5, false);
}
}
}
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDGemObjects1Objects = Hashtable.newFrom({"Gem": gdjs.StartCode.GDGemObjects1});
gdjs.StartCode.asyncCallback14688796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage selection", false);
}
gdjs.StartCode.localVariables.length = 0;
}
gdjs.StartCode.idToCallbackMap.set(14688796, gdjs.StartCode.asyncCallback14688796);
gdjs.StartCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.StartCode.asyncCallback14688796(runtimeScene, asyncObjectsList)), 14688796, asyncObjectsList);
}
}

}


};gdjs.StartCode.eventsList20 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPlayerObjects1[k] = gdjs.StartCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setJumpSpeed(800);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setJumpSpeed(800);
}
}
}

}


{


gdjs.StartCode.eventsList0(runtimeScene);
}


{


gdjs.StartCode.eventsList1(runtimeScene);
}


{


gdjs.StartCode.eventsList2(runtimeScene);
}


{


gdjs.StartCode.eventsList7(runtimeScene);
}


{


gdjs.StartCode.eventsList13(runtimeScene);
}


{


gdjs.StartCode.eventsList18(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Gem"), gdjs.StartCode.GDGemObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreInCollision.func(runtimeScene, gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayerObjects1Objects, "Object3D", gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDGemObjects1Objects, "Object3D", false, null);
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].activateBehavior("Platformer3DKeyboardMapper", false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("levels", "1", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}

{ //Subevents
gdjs.StartCode.eventsList19(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGroundObjects1.length = 0;
gdjs.StartCode.GDGroundObjects2.length = 0;
gdjs.StartCode.GDGroundObjects3.length = 0;
gdjs.StartCode.GDGroundObjects4.length = 0;
gdjs.StartCode.GDGroundObjects5.length = 0;
gdjs.StartCode.GDGroundObjects6.length = 0;
gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDPlayerObjects3.length = 0;
gdjs.StartCode.GDPlayerObjects4.length = 0;
gdjs.StartCode.GDPlayerObjects5.length = 0;
gdjs.StartCode.GDPlayerObjects6.length = 0;
gdjs.StartCode.GDCoinObjects1.length = 0;
gdjs.StartCode.GDCoinObjects2.length = 0;
gdjs.StartCode.GDCoinObjects3.length = 0;
gdjs.StartCode.GDCoinObjects4.length = 0;
gdjs.StartCode.GDCoinObjects5.length = 0;
gdjs.StartCode.GDCoinObjects6.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects1.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects2.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects3.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects4.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects5.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects6.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects1.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects2.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects3.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects4.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects5.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects6.length = 0;
gdjs.StartCode.GDdashPlatFormObjects1.length = 0;
gdjs.StartCode.GDdashPlatFormObjects2.length = 0;
gdjs.StartCode.GDdashPlatFormObjects3.length = 0;
gdjs.StartCode.GDdashPlatFormObjects4.length = 0;
gdjs.StartCode.GDdashPlatFormObjects5.length = 0;
gdjs.StartCode.GDdashPlatFormObjects6.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects1.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects2.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects3.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects4.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects5.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects6.length = 0;
gdjs.StartCode.GDCheckPointObjects1.length = 0;
gdjs.StartCode.GDCheckPointObjects2.length = 0;
gdjs.StartCode.GDCheckPointObjects3.length = 0;
gdjs.StartCode.GDCheckPointObjects4.length = 0;
gdjs.StartCode.GDCheckPointObjects5.length = 0;
gdjs.StartCode.GDCheckPointObjects6.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects3.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects4.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects5.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects6.length = 0;
gdjs.StartCode.GDOrcObjects1.length = 0;
gdjs.StartCode.GDOrcObjects2.length = 0;
gdjs.StartCode.GDOrcObjects3.length = 0;
gdjs.StartCode.GDOrcObjects4.length = 0;
gdjs.StartCode.GDOrcObjects5.length = 0;
gdjs.StartCode.GDOrcObjects6.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects1.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects2.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects3.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects4.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects5.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects6.length = 0;
gdjs.StartCode.GDGemObjects1.length = 0;
gdjs.StartCode.GDGemObjects2.length = 0;
gdjs.StartCode.GDGemObjects3.length = 0;
gdjs.StartCode.GDGemObjects4.length = 0;
gdjs.StartCode.GDGemObjects5.length = 0;
gdjs.StartCode.GDGemObjects6.length = 0;

gdjs.StartCode.eventsList20(runtimeScene);
gdjs.StartCode.GDGroundObjects1.length = 0;
gdjs.StartCode.GDGroundObjects2.length = 0;
gdjs.StartCode.GDGroundObjects3.length = 0;
gdjs.StartCode.GDGroundObjects4.length = 0;
gdjs.StartCode.GDGroundObjects5.length = 0;
gdjs.StartCode.GDGroundObjects6.length = 0;
gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDPlayerObjects3.length = 0;
gdjs.StartCode.GDPlayerObjects4.length = 0;
gdjs.StartCode.GDPlayerObjects5.length = 0;
gdjs.StartCode.GDPlayerObjects6.length = 0;
gdjs.StartCode.GDCoinObjects1.length = 0;
gdjs.StartCode.GDCoinObjects2.length = 0;
gdjs.StartCode.GDCoinObjects3.length = 0;
gdjs.StartCode.GDCoinObjects4.length = 0;
gdjs.StartCode.GDCoinObjects5.length = 0;
gdjs.StartCode.GDCoinObjects6.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects1.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects2.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects3.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects4.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects5.length = 0;
gdjs.StartCode.GDMovingPlatFormObjects6.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects1.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects2.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects3.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects4.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects5.length = 0;
gdjs.StartCode.GDLava_9595BlockObjects6.length = 0;
gdjs.StartCode.GDdashPlatFormObjects1.length = 0;
gdjs.StartCode.GDdashPlatFormObjects2.length = 0;
gdjs.StartCode.GDdashPlatFormObjects3.length = 0;
gdjs.StartCode.GDdashPlatFormObjects4.length = 0;
gdjs.StartCode.GDdashPlatFormObjects5.length = 0;
gdjs.StartCode.GDdashPlatFormObjects6.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects1.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects2.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects3.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects4.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects5.length = 0;
gdjs.StartCode.GDMoving_9595LavaObjects6.length = 0;
gdjs.StartCode.GDCheckPointObjects1.length = 0;
gdjs.StartCode.GDCheckPointObjects2.length = 0;
gdjs.StartCode.GDCheckPointObjects3.length = 0;
gdjs.StartCode.GDCheckPointObjects4.length = 0;
gdjs.StartCode.GDCheckPointObjects5.length = 0;
gdjs.StartCode.GDCheckPointObjects6.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects1.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects2.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects3.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects4.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects5.length = 0;
gdjs.StartCode.GDMovingPlatForm_9595UpDownObjects6.length = 0;
gdjs.StartCode.GDOrcObjects1.length = 0;
gdjs.StartCode.GDOrcObjects2.length = 0;
gdjs.StartCode.GDOrcObjects3.length = 0;
gdjs.StartCode.GDOrcObjects4.length = 0;
gdjs.StartCode.GDOrcObjects5.length = 0;
gdjs.StartCode.GDOrcObjects6.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects1.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects2.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects3.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects4.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects5.length = 0;
gdjs.StartCode.GDOrc_9595ModelObjects6.length = 0;
gdjs.StartCode.GDGemObjects1.length = 0;
gdjs.StartCode.GDGemObjects2.length = 0;
gdjs.StartCode.GDGemObjects3.length = 0;
gdjs.StartCode.GDGemObjects4.length = 0;
gdjs.StartCode.GDGemObjects5.length = 0;
gdjs.StartCode.GDGemObjects6.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;

gdjs.Stage_32selectionCode = {};
gdjs.Stage_32selectionCode.localVariables = [];
gdjs.Stage_32selectionCode.idToCallbackMap = new Map();
gdjs.Stage_32selectionCode.GDLevel_95951Objects1= [];
gdjs.Stage_32selectionCode.GDLevel_95951Objects2= [];
gdjs.Stage_32selectionCode.GDLevel_95952Objects1= [];
gdjs.Stage_32selectionCode.GDLevel_95952Objects2= [];
gdjs.Stage_32selectionCode.GDNewTextObjects1= [];
gdjs.Stage_32selectionCode.GDNewTextObjects2= [];
gdjs.Stage_32selectionCode.GDGreenButtonObjects1= [];
gdjs.Stage_32selectionCode.GDGreenButtonObjects2= [];
gdjs.Stage_32selectionCode.GDNewSpriteObjects1= [];
gdjs.Stage_32selectionCode.GDNewSpriteObjects2= [];


gdjs.Stage_32selectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level_1"), gdjs.Stage_32selectionCode.GDLevel_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Stage_32selectionCode.GDLevel_95951Objects1.length;i<l;++i) {
    if ( gdjs.Stage_32selectionCode.GDLevel_95951Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Stage_32selectionCode.GDLevel_95951Objects1[k] = gdjs.Stage_32selectionCode.GDLevel_95951Objects1[i];
        ++k;
    }
}
gdjs.Stage_32selectionCode.GDLevel_95951Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_2"), gdjs.Stage_32selectionCode.GDLevel_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Stage_32selectionCode.GDLevel_95952Objects1.length;i<l;++i) {
    if ( gdjs.Stage_32selectionCode.GDLevel_95952Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Stage_32selectionCode.GDLevel_95952Objects1[k] = gdjs.Stage_32selectionCode.GDLevel_95952Objects1[i];
        ++k;
    }
}
gdjs.Stage_32selectionCode.GDLevel_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Stage_32selectionCode.GDLevel_95952Objects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss", false);
}
{for(var i = 0, len = gdjs.Stage_32selectionCode.GDLevel_95952Objects1.length ;i < len;++i) {
    gdjs.Stage_32selectionCode.GDLevel_95952Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_2"), gdjs.Stage_32selectionCode.GDLevel_95952Objects1);
{for(var i = 0, len = gdjs.Stage_32selectionCode.GDLevel_95952Objects1.length ;i < len;++i) {
    gdjs.Stage_32selectionCode.GDLevel_95952Objects1[i].getBehavior("Opacity").setOpacity(100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Level_1_Done", "1", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Stage_32selectionCode.GDGreenButtonObjects1);
{for(var i = 0, len = gdjs.Stage_32selectionCode.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.Stage_32selectionCode.GDGreenButtonObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}
}

}


};

gdjs.Stage_32selectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stage_32selectionCode.GDLevel_95951Objects1.length = 0;
gdjs.Stage_32selectionCode.GDLevel_95951Objects2.length = 0;
gdjs.Stage_32selectionCode.GDLevel_95952Objects1.length = 0;
gdjs.Stage_32selectionCode.GDLevel_95952Objects2.length = 0;
gdjs.Stage_32selectionCode.GDNewTextObjects1.length = 0;
gdjs.Stage_32selectionCode.GDNewTextObjects2.length = 0;
gdjs.Stage_32selectionCode.GDGreenButtonObjects1.length = 0;
gdjs.Stage_32selectionCode.GDGreenButtonObjects2.length = 0;
gdjs.Stage_32selectionCode.GDNewSpriteObjects1.length = 0;
gdjs.Stage_32selectionCode.GDNewSpriteObjects2.length = 0;

gdjs.Stage_32selectionCode.eventsList0(runtimeScene);
gdjs.Stage_32selectionCode.GDLevel_95951Objects1.length = 0;
gdjs.Stage_32selectionCode.GDLevel_95951Objects2.length = 0;
gdjs.Stage_32selectionCode.GDLevel_95952Objects1.length = 0;
gdjs.Stage_32selectionCode.GDLevel_95952Objects2.length = 0;
gdjs.Stage_32selectionCode.GDNewTextObjects1.length = 0;
gdjs.Stage_32selectionCode.GDNewTextObjects2.length = 0;
gdjs.Stage_32selectionCode.GDGreenButtonObjects1.length = 0;
gdjs.Stage_32selectionCode.GDGreenButtonObjects2.length = 0;
gdjs.Stage_32selectionCode.GDNewSpriteObjects1.length = 0;
gdjs.Stage_32selectionCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Stage_32selectionCode'] = gdjs.Stage_32selectionCode;

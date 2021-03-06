/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/13
 * Time: 10:41
 */
'use strict';
export default {
    data(){
        return {
            componentReady:false
        }
    },
    props:{
        msGridId:{

        },
        msGridScopeId:{

        },
        gridContainer:{

        },
        scrollWidth:{
            type:Number
        },
        scrollY:{
            type:Boolean,
            default(){
                return false;
            }
        },
        scrollX:{
            type:Boolean,
            default(){
                return false;
            }
        },
        height:{

        },
        width:{

        },
        position:{
            type:String,
            default(){
                return "center";
            }
        },
        bordered:{
            type:Boolean,
            default(){
                return false;
            }
        },
        hasLeft:{
            type:Boolean,
            default(){
                return false;
            }
        },
        treeStructure:{
            type:Boolean,
            default:function() {
                return false;
            }
        },
        data:{
            type:Array,
            default:function () {
                return [];
            }
        },
        record:{
            type:Object,
            default() {
                return {};
            }
        },
        originColumns:{
            type:Array,
            default:function() {
                return [];
            }
        },
        columns:{
            type:Array,
            default:function() {
                return [];
            }
        },
        column:{
            type:Object,
            default() {
                return {};
            }
        },
        rowIndex:{
            type:Number,
            default(){
                return 0;
            }
        },
        cellIndex:{
            type:Number,
            default(){
                return 0;
            }
        },
        needScrollSpace:{
            type:Boolean,
            default(){
                return false;
            }
        },
        needScrollXSpace:{
            type:Boolean,
            default(){
                return false;
            }
        }
    }
}
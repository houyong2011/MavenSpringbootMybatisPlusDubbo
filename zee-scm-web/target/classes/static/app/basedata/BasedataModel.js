Ext.define('app.basedata.BasedataModel',{
    extend:'app.view.ViewModel',
    alias:'viewmodel.basedataModel',

    stores:{
        basedataTreeGridStore:{
            autoLoad:true,
            type:"tree",
            sorters:'sortorder',
            defaultRootProperty:"data",
            nodeParam:"parentId",
            root:{
                id:"0",
                text:"顶级分类",
                name:"顶级分类"
            },
            fields: [{
                name:'id'
            },{
                name:'parentId'
            },{
                name:'name'
            },{
                name:'code'
            },{
                name:'value'
            },{
                name:'description'
            },{
                name:'sortorder'
            },{
                name:'status'
            },{
                name:'extendJson'
            }],
            proxy: {
                type:'ajax',
                url:'basedata/findByParentId'
            }
        }
    }
});
<template>
    <div class="data-list">
        <div class="bg-white bottom-tab-prev">
            <div class="middle-top">
                <div class="middle-sel">
                    维度选择
                    <div class="sel-group">
                        <select v-model="searchdata.type" v-on:change="getData(searchdata.type, 2);">
                            <option value="1">区域</option>
                            <option value="2">项目部</option>
                        </select>
                         <i class="fa fa-angle-down arrow"></i>
                    </div>
                </div>
                <div class="middle-sel">
                   指标选择
                    <div class="sel-group">
                       <select v-model="searchdata.quota" v-on:change="setData();">
                           <option value="1">人头</option>
                           <option value="2">GMV</option>
                           <option value="3">总营收</option>
                       </select>
                       <i class="fa fa-angle-down arrow"></i>
                    </div>
                </div>
            </div>
            <template v-if="searchdata.flag == 3 && searchdata.type == 2">
                <div class="middle-mid">
                    <template v-for="nh in fakedata['quota_' + searchdata.quota].Nhead">
                        <span v-if="$index == 0" class="col-12">{{nh.name}}：{{listdata[nh.key]}} {{nh.com}}</span>
                    </template>
                </div>
            </template>
            <div class="middle-mid">
                <template v-for="nh in fakedata['quota_' + searchdata.quota].Nhead">
                    <template v-if="searchdata.flag != 3 || searchdata.type != 2 || $index != 0">
                        <span>{{nh.name}}：{{listdata[nh.key]}} {{nh.com}}</span>
                    </template>
                </template>
            </div>
            <div class="middle-bottom J-WaterMarkBox">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(th, i) in fakedata['quota_' + searchdata.quota].Thead" title="th.name">
                                <a href="javascript:;" style="display: block;color: #337ab7;" v-on:click="setOrder(i);">
                                    {{th.name}} <i class="fa fa-arrows-v"></i>
                                </a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in dateDetail">
                            <td v-for="td in fakedata['quota_' + searchdata.quota].Thead"><!--  title="{{td.key}}" -->
                                <template v-if="td.contrast && item[td.key] < listdata[td.contrast]">
                                        <span class="text-red">
                                            {{item[td.key]}} {{td.com}}
                                            <template v-if="item[td.key] < 0">
                                                <i class="fa fa-long-arrow-down"></i>
                                            </template>
                                        </span>
                                </template>
                                <template v-else>
                                    {{item[td.key]}} {{td.com}}
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- <pre>{{$data | json}}</pre> -->
        </div>
        <bottomtab></bottomtab>
    </div>
</template>

<script>
    require('less/datalist');
    import bottomtab from 'components/bottomtab';
    import lodash from 'lodash';

    export default {
        data() {
            return {
                searchdata:{
                    type: 2,
                    quota: 2,
                    flag: 1
                },
                listdata:{},
                fakedata:{
                    quota_1: { //人头
                        Thead: [{
                            name: '名称',
                            com: '',
                            key: 'Name'
                        }, {
                            name: '人头数',
                            com: '',
                            key: 'PersonCount'
                        }, {
                            name: '环比',
                            com: '%',
                            key: 'PersonCountGrowthRate',
                            contrast: 'ToTalPersonCountGrowthRate'
                        }, {
                            name: '占比',
                            com: '%',
                            key: 'PersonCountAccounting',
                        }], //'完成率3'
                        Nhead: [{
                            name: '总人头数',
                            com: '',
                            key: 'ToTalPersonCount'
                        }, {
                            name: '环比',
                            com: '%',
                            key: 'ToTalPersonCountGrowthRate'
                        }] //'完成率'
                    },
                    quota_2: { //GMV
                        Thead: [{
                            name: '名称',
                            com: '',
                            key: 'Name'
                        }, {
                            name: '金额（万）',
                            com: '',
                            key: 'GMV'
                        }, {
                            name: '环比',
                            com: '%',
                            key: 'GMVGrowthRate',
                            contrast: 'TotalGMVGrowthRate'
                        }, {
                            name: '占比',
                            com: '%',
                            key: 'GMVAccounting'
                        }],
                        Nhead: [{
                            name: '总金额',
                            com: '万',
                            key: 'ToTalGMV'
                        }, {
                            name: '环比',
                            com: '%',
                            key: 'TotalGMVGrowthRate'
                        }] //'完成率'
                    },
                    quota_3: { //总营收
                        Thead: [{
                            name: '名称',
                            com: '',
                            key: 'Name'
                        }, {
                            name: '金额（万）',
                            com: '',
                            key: 'GrossMargin'
                        }, {
                            name: '佣金率',
                            com: '%',
                            key: 'GrossMarginGrowthRate',
                            contrast: 'ToTalGrossMarginRate'
                        }, {
                            name: '占比',
                            com: '%',
                            key: 'GrossMarginAccounting'
                        }], //'完成率3'
                        Nhead: [{
                            name: '总金额',
                            com: '万',
                            key: 'ToTalGrossMargin'
                        }, {
                            name: '佣金率',
                            com: '%',
                            key: 'ToTalGrossMarginRate'
                        }] //'完成率'
                    }
                }
            }
        },
        mounted(){
            this.getData(1);
        },
        methods :{
            getData($index, _type){//_type 默认1，2为维度选择
                var self = this;
                if(!_type) self.searchdata.flag = $index;
                self.$root.showloading();

                var re = {"DateDetail":[{"Name":"东北","GMV":1428810.00,"GrossMargin":92461.40,"PersonCount":528,"GMVGrowthRate":1.49,"PersonCountGrowthRate":1.27,"GrossMarginGrowthRate":1.66,"GMVAccounting":0.14,"PersonCountAccounting":0.13,"GrossMarginAccounting":0.15,"PersonCountCompletionRate":77,"GMVCompletionRate":36,"GrossMarginCompletionRate":22},{"PersonCountGrowthRate":-3,"PersonCountCompletionRate":130,"Name":"福建","GMV":997109.00,"GrossMargin":75692.60,"PersonCount":568,"GMVGrowthRate":1.36,"GrossMarginGrowthRate":2.05,"GMVAccounting":0.10,"PersonCountAccounting":0.14,"GrossMarginAccounting":0.12},{"Name":"广西","GMV":470976.00,"GrossMargin":30216.05,"PersonCount":227,"GMVGrowthRate":0.84,"PersonCountGrowthRate":0.70,"GrossMarginGrowthRate":0.84,"GMVAccounting":0.05,"PersonCountAccounting":0.05,"GrossMarginAccounting":0.05},{"Name":"海南","GMV":802948.00,"GrossMargin":44552.60,"PersonCount":287,"GMVGrowthRate":1.04,"PersonCountGrowthRate":1.08,"GrossMarginGrowthRate":1.44,"GMVAccounting":0.08,"PersonCountAccounting":0.07,"GrossMarginAccounting":0.07},{"Name":"华北","GMV":1369289.00,"GrossMargin":64999.25,"PersonCount":670,"GMVGrowthRate":2.22,"PersonCountGrowthRate":2.09,"GrossMarginGrowthRate":1.66,"GMVAccounting":0.13,"PersonCountAccounting":0.16,"GrossMarginAccounting":0.10},{"Name":"华东","GMV":518432.00,"GrossMargin":35488.90,"PersonCount":301,"GMVGrowthRate":1.40,"PersonCountGrowthRate":1.22,"GrossMarginGrowthRate":1.78,"GMVAccounting":0.05,"PersonCountAccounting":0.07,"GrossMarginAccounting":0.06},{"Name":"两湖","GMV":658647.00,"GrossMargin":42069.10,"PersonCount":291,"GMVGrowthRate":0.85,"PersonCountGrowthRate":0.96,"GrossMarginGrowthRate":1.32,"GMVAccounting":0.06,"PersonCountAccounting":0.07,"GrossMarginAccounting":0.07},{"Name":"西部","GMV":2321982.00,"GrossMargin":132426.15,"PersonCount":587,"GMVGrowthRate":1.69,"PersonCountGrowthRate":1.36,"GrossMarginGrowthRate":1.67,"GMVAccounting":0.22,"PersonCountAccounting":0.14,"GrossMarginAccounting":0.21},{"Name":"云南","GMV":1033353.00,"GrossMargin":70142.55,"PersonCount":283,"GMVGrowthRate":1.04,"PersonCountGrowthRate":0.84,"GrossMarginGrowthRate":1.17,"GMVAccounting":0.10,"PersonCountAccounting":0.07,"GrossMarginAccounting":0.11},{"Name":"中原","GMV":774156.00,"GrossMargin":38342.50,"PersonCount":388,"GMVGrowthRate":1.81,"PersonCountGrowthRate":1.67,"GrossMarginGrowthRate":2.01,"GMVAccounting":0.07,"PersonCountAccounting":0.09,"GrossMarginAccounting":0.06}],"ToTalGMV":10375702.00,"ToTalPersonCount":4130,"ToTalGrossMargin":626391.10,"TotalGMVGrowthRate":1.37,"ToTalPersonCountGrowthRate":1.25,"ToTalGrossMarginRate":1.53,"ToTalPersonCountCompletionRate":77.58,"ToTalGMVCompletionRate":80,"ToTalGrossMarginCompletionRate":38};
                self.listdata = re;
                self.setData();
                self.$root.setWaterMark();
                self.$root.hideloading();
            },
            setData(){
                var self = this;
                var quota = self.searchdata.quota;
                var flag = self.searchdata.flag;
                var type = self.searchdata.type;
                var _head = self.fakedata['quota_' + quota];
                var arr_quota = ['PersonCount', 'GMV', 'GrossMargin'];
                if(flag == 3 && type == 2){
                    if(_head.Nhead.length == 2) _head.Nhead.push({name: '完成率', com: '%', key: 'ToTal' + arr_quota[quota - 1] + 'CompletionRate'});
                    if(_head.Thead.length == 4) _head.Thead.splice(2, 0, {name: '完成率', com: '%', key: arr_quota[quota - 1] + 'CompletionRate', contrast: 'ToTal' + arr_quota[quota - 1] + 'CompletionRate'});
                }else{
                    if(_head.Thead.length == 5) _head.Thead.splice(2, 1);
                    if(_head.Nhead.length == 3) _head.Nhead.splice(2, 1);
                }
            },
            setOrder($index){
                var self = this;
                self.$set(self.listdata, 'orderKey', self.fakedata['quota_' + self.searchdata.quota].Thead[$index].key);
                self.$set(self.listdata, 'orderNum', self.listdata.orderNum == 'desc' ? 'asc' : 'desc');
            }
        },
        computed: {
            dateDetail() {
                return lodash.orderBy(this.listdata.DateDetail, this.listdata.orderKey, this.listdata.orderNum); //
            }
        },
        components: {
            bottomtab
        }
    }
</script>

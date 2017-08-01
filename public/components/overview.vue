<template>
    <div class="overflow">
        <div class="J-WaterMarkBox">
            <div style="padding-bottom: 80px;" v-if="flag == 3">
                <ul class="color-cue">
                    <li><span class="cue-red"></span>实际完成</li>
                    <li><span class="cue-blue"></span>目标值</li>
                </ul>
                <p class="title">GMV完成情况</p>
                <div class="mid">
                    <div class="mid-title" style="padding-top: 20px;">
                        累计<span class="text-red">{{data.TargetDate}}月</span>GMV(KPI)完成情况（单位：万）
                    </div>
                    <div class="mid-body">
                        <div class="col-p">
                            <div class="col-up">
                                <label class="static">{{data.GMV}}</label>
                                <div class="p-p">
                                    <p :style="{ width: data.GMVAccumulatedRate * chartrate+ '%' }">
                                        <span>{{data.GMVAccumulatedRate}}%</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-down">
                                <label class="static">{{data.GMVTarget}}</label>
                                <div class="p-p">
                                    <p :style="{ width: 100 * chartrate + '%' }"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mid">
                    <div class="mid-title">
                        预计<span class="text-red">{{data.TargetDate}}月</span>GMV(KPI)完成情况（单位：万）
                    </div>
                    <div class="mid-body">
                        <div class="col-p">
                            <div class="col-up">
                                <label class="static">{{data.ExpectedGMV}}</label>
                                <div class="p-p">
                                    <p :style="{ width: data.GMVExpectedCompletionRate * chartrate + '%' }">
                                        <span>{{data.GMVExpectedCompletionRate}}%</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-down">
                                <label class="static">{{data.GMVTarget}}</label>
                                <div class="p-p">
                                    <p :style="{ width: 100 * chartrate + '%' }"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="mid-hr">
                <p class="title">人头及佣金完成情况</p>
                <div class="mid">
                    <div class="mid-title" style="padding-top: 20px;">
                        人头完成情况（单位：人）
                    </div>
                    <div class="mid-body">
                        <div class="col-p">
                            <div class="col-up">
                                <label class="static">{{data.PersonCount}}</label>
                                <div class="p-p">
                                    <p :style="{ width: data.PersonCountCompletionRate * chartrate + '%' }">
                                        <span>{{data.PersonCountCompletionRate}}%</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-down">
                                <label class="static">{{data.PersonCountTarget}}</label>
                                <div class="p-p">
                                    <p :style="{ width: 100 * chartrate + '%' }"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mid">
                    <div class="mid-title">
                        佣金完成情况（单位：万）
                    </div>
                    <div class="mid-body">
                        <div class="col-p">
                            <div class="col-up">
                                <label class="static">{{data.GrossMargin}}</label>
                                <div class="p-p">
                                    <p :style="{ width: data.GrossMarginCompletionRate * chartrate + '%' }">
                                        <span>{{data.GrossMarginCompletionRate}}%</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-down">
                                <label class="static">{{data.GrossMarginTarget}}</label>
                                <div class="p-p">
                                    <p :style="{ width: 100 * chartrate + '%' }"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="dashboard bottom-tab-prev" v-else-if="flag && flag != 3">
                <li>
                    <div class="panel">
                        <p class="text-gray-6">GMV</p>
                        <p class="text-ink">{{data.GMV}}万</p>
                    </div>
                    <div class="line"></div>
                    <div class="panel">
                        <p class="text-gray-6">环比上月增长</p>
                        <p class="text-red">{{data.GMVGrowthRate}}%</p>
                    </div>
                </li>
                <li>
                    <div class="panel">
                        <p class="text-gray-6">人头数</p>
                        <p class="text-ink">{{data.PersonCount}}</p>
                    </div>
                    <div class="line"></div>
                    <div class="panel">
                        <p class="text-gray-6">环比上月增长</p>
                        <p class="text-red">{{data.PersonCountGrowthRate}}%</p>
                    </div>
                </li>
                <li>
                    <div class="panel">
                        <p class="text-gray-6">佣金</p>
                        <p class="text-ink">{{data.GrossMargin}}万</p>
                    </div>
                    <div class="line"></div>
                    <div class="panel">
                        <p class="text-gray-6">佣金率</p>
                        <p class="text-red">{{data.GrossMarginRate}}%</p>
                    </div>
                </li>
                <li>
                    <div class="panel">
                        <p class="text-gray-6">客单价</p>
                        <p class="text-ink">{{data.CustomerPrice}}</p>
                    </div>
                    <div class="line"></div>
                    <div class="panel">
                        <p class="text-gray-6">付款率</p>
                        <p class="text-red">{{data.PaymentRate}}%</p>
                    </div>
                </li>
                <li class="col-4">
                    <div class="panel">
                        <p class="text-gray-6">产品UV</p>
                        <p class="text-ink">{{data.UV}}</p>
                    </div>
                    <div class="line"></div>
                    <div class="panel">
                        <p class="text-gray-6">创建订单数</p>
                        <p class="text-ink">{{data.OrderCount}}</p>
                    </div>
                    <div class="line"></div>
                    <div class="panel">
                        <p class="text-gray-6">转化</p>
                        <p class="text-red">{{data.UVConversionRate}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <bottomtab></bottomtab>
    </div>
</template>

<script>
    require('less/overview');
    import bottomtab from 'components/bottomtab';

    export default {
        data(){
            return{
                data: {},
                flag: 1,
                chartrate: 1
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            getData(flag){
                var self = this;
                flag = flag || 1;
                self.$root.bg = flag == 3 ? 'white' : 'gray';
                self.flag = flag;
                self.$root.showloading();
                self.$root.removeWaterMark();

                var re = flag != 3 ? {"PersonCount":3789,"GMV":966.66,"GrossMargin":63.45,"CustomerPrice":2551.23,"OrderCount":2015,"GrossMarginRate":6.56,"PaymentRate":49.53,"UV":267928,"GMVGrowthRate":85.42,"PersonCountGrowthRate":68.40,"UVConversionRate":132.97,"TargetDate":"","PersonCountTarget":0,"GrossMarginTarget":0,"GMVAccumulatedRate":0,"GMVExpectedCompletionRate":0,"PersonCountCompletionRate":0,"GrossMarginCompletionRate":0,"GMVTarget":0,"ExpectedGMV":0} : {"PersonCount":91456,"GMV":23216.04,"GrossMargin":1447.85,"CustomerPrice":0,"OrderCount":0,"GrossMarginRate":0.062364,"PaymentRate":0,"UV":0,"GMVGrowthRate":0,"PersonCountGrowthRate":0,"UVConversionRate":0,"TargetDate":"07","PersonCountTarget":133928.00,"GrossMarginTarget":2054.65,"GMVAccumulatedRate":67.93,"GMVExpectedCompletionRate":81.52,"PersonCountCompletionRate":68.29,"GrossMarginCompletionRate":70.47,"GMVTarget":34176.57,"ExpectedGMV":27859.24};
                console.log(re);
                self.$root.setWaterMark();
                if(flag == 3) self.setRate(re);

                self.data = re;
                self.$root.hideloading();
            },
            setRate (re){
                var self = this;
                var _arr = ['GMVAccumulatedRate', 'GMVExpectedCompletionRate', 'PersonCountCompletionRate', 'GrossMarginCompletionRate', 'GrossMarginRate'];
                var _num = 0;
                var _rate = 1;
                $.each(_arr,function(i,v){
                    if(re[v] > _num) _num = re[v];
                });
                if(_num > 100) _rate = 100 / _num;
                self.chartrate = _rate;
            }
        },
        components: {
            bottomtab
        }
    }
</script>

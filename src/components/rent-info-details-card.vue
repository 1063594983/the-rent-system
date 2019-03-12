<template>
    <div class="info-details">
            <el-card class="info-card">
                <div class="price">
                    <span class="price-number">{{ infoDetails.price }}</span>元/月(押一付三)
                </div>
                <hr>
                <div class="info">
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.method }}</span><br>
                        <span class="info-tip">出租方式</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.type }}</span><br>
                        <span class="info-tip">户型</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.area }}</span><br>
                        <span class="info-tip">建筑面积</span>
                    </div>
                </div>
                <hr>
                <div class="info">
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.direction }}</span><br>
                        <span class="info-tip">朝向</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">高层</span><br>
                        <span class="info-tip">楼层（共{{ infoDetails.height }}层）</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">精装修</span><br>
                        <span class="info-tip">装修</span>
                    </div>
                </div>
                <hr>
                <div class="address">
                    <div class="address-item">
                        <div class="address-item-title">
                            小区
                        </div>
                        <div class="address-item-content">
                            {{ infoDetails.part }}
                        </div>
                    </div>
                    <div class="address-item">
                        <div class="address-item-title">
                            地址
                        </div>
                        <div class="address-item-content">
                            {{ infoDetails.address }}
                        </div>
                    </div> 
                </div>
                <hr>
                <div class="contact">
                    <div class="host-image">
                        <img :src="contactImage">
                    </div>
                    <div class="contact-details">
                        <div class="host-name">
                            <div>XXX</div>
                            <div>
                                <el-button>和Ta联系</el-button>
                            </div>
                        </div>
                        <div class="ranking">
                            <el-rate :value="2" :disabled="true"></el-rate>
                        </div>
                        <div class="phone-number">
                            dial: 183XXXX2818
                        </div>
                    </div>
                </div>
                <hr>
                <div>
                    <el-button class="rent-btn" @click="dialogVisible = true">租赁</el-button>
                </div>
            </el-card>
            <div>
                <el-dialog top="60%" :visible.sync = "dialogVisible" title="详情" width="80%">
                    <div class="rent-details">
                        <div class="rent-details-item">
                            <el-col :span="8">
                                开始时间:
                            </el-col>
                            <el-col :span="16">
                                <el-date-picker v-model="startTime" type="date" placeholder="选择日期"></el-date-picker>
                            </el-col>
                              
                        </div>
                        <br>
                        <div class="rent-details-item">
                            <el-col :span="8">
                                租期(月): 
                            </el-col>
                             <el-col :span="16"><el-input-number v-model="monthNum" :min="1" :max="12" label="月份"></el-input-number></el-col>
                        </div>
                        <br>
                        <div class="rent-details-item">
                            <el-col :span="8">
                                租金(元)
                            </el-col>
                            <el-col :span="16">
                                <div style="font-size: 20px; color:red;">￥{{ infoDetails.price * monthNum }}</div>
                            </el-col>
                        </div>
                        <br>
                        <div>
                            <el-button class="confirm-btn" @click="confirmOrder">确定订单</el-button>
                        </div>
                    </div>
                   
                
                </el-dialog>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            contactImage: '../../static/image/head.jpg',
            dialogVisible: false,
            startTime: '',
            monthNum: ''
        }
    },
    props: {
        infoDetails: {
            type: Object,
            default: () => {
                return {
                    price: 1600,
                    method: '整租',
                    type: '2室1厅1卫',
                    area: '15',
                    direction: '南北',
                    height: '10',
                    part: '南亭佳苑',
                    address: '金展路2146弄'
                }
                
            }
        }
    },
    created() {
        this.startTime = Date();
        this.monthNum = 0;
    },
    methods: {
        confirmOrder() {
            this.dialogVisible = false;
        }
    }
}
</script>

<style scoped>

.info-card {
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.price-number {
    font-size: 30px;
    color: red;
}

.info {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}

.info-font {
    font-size: 20px;
}

.info-tip {
    font-size: 15px;
    line-height: 10px;
    color: #909399;
}

.address {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}

.address-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.address-item-title {
    width: 30%;
    text-align: center;
    color: #909399;
}

.contact {
    height: 120px;
    display: flex;
    flex-direction: row;
    /*justify-content: flex-start;*/
    /*border: 1px solid red;*/
}

.host-image {
    height: inherit;
    width: 30%;
    /*border: 1px solid red;*/
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.host-image img {
    height: inherit;
    width: 100%;
    vertical-align: middle;
    text-align: center;
}

.contact-details {
    height: inherit;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /*border: 1px solid red;*/
}

.host-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.phone-number {
    color: #909399;
}

.rent-btn {
    width: 100%;
    color: white;
    background: #5980ce;
}

.rent-details {
    display: flex;
    flex-direction: column;
}

.rent-details-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.confirm-btn {
    width: 100%;
    background: rgb(47, 192, 192);
}
</style>

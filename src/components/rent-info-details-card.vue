<template>
    <div class="info-details">
            <el-card class="info-card">
                <div class="price">
                    <span class="price-number">{{ infoDetails.monthly_rent }}</span>元/月<span class="info-tip">(押一付三)</span>
                </div>
                <div class="info">
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.details.rentMethod }}</span><br>
                        <span class="info-tip">出租方式</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.details.type }}</span><br>
                        <span class="info-tip">户型</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.details.area }}</span><br>
                        <span class="info-tip">建筑面积</span>
                    </div>
                </div>
                <div class="info">
                    <div class="info-item">
                        <span class="info-font">{{ infoDetails.details.direction }}</span><br>
                        <span class="info-tip">朝向</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">高层</span><br>
                        <span class="info-tip">楼层（共{{ infoDetails.details.height }}层）</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">精装修</span><br>
                        <span class="info-tip">装修</span>
                    </div>
                </div>
                <div class="address">
                    <div class="address-item">
                        <div class="address-item-title">
                            小区
                        </div>
                        <div class="address-item-content">
                            {{ infoDetails.details.part }}
                        </div>
                    </div>
                    <div class="address-item">
                        <div class="address-item-title">
                            地址
                        </div>
                        <div class="address-item-content">
                            {{ infoDetails.details.address }}
                        </div>
                    </div>
                </div>
                <div class="contact">
                    <div class="host-image">
                        <img :src="contactImage">
                    </div>
                    <div class="contact-details">
                        <div class="host-name">
                            <div>马云</div>
                            <div>
                                <el-button size="small">和Ta联系</el-button>
                            </div>
                        </div>
                        <div class="ranking">
                            <el-rate :value="2" :disabled="true"></el-rate>
                        </div>
                        <div class="phone-number">
                            手机: 18312342818
                        </div>
                    </div>
                </div>
                
            </el-card>
        </div>
</template>

<script>
export default {
    data() {
        return {
            contactImage: '../../static/image/head.jpg',
            dialogVisible: false,
            startTime: '',
            monthNum: 0
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
            this.$emit("onOrderSubmit", {
                startTime: new Date(this.startTime).getTime(),
                monthNum: this.monthNum
            })
            
        }
    }
}
</script>

<style scoped>

.info-card {
    height: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
}

.price-number {
    font-size: 30px;
    color: orangered;
    margin-right: 8px;
}

.info {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin: 20px 0;
}

.info-item {
  flex: 1;
}

.info-font {
    font-size: 16px;
}

.info-tip {
    font-size: 12px;
    line-height: 10px;
    color: #909399;
}

.address {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.address-item {
    padding: 10px 0;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.address-item-title {
    width: 30%;
    color: #909399;
}

.contact {
    border-top: 1px solid #eaeaea;
    margin: 20px 0;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
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
    padding: 0 16px;
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
    margin-top: 10px;
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

.ranking {
  margin-top: 10px;
}

.confirm-btn {
    width: 100%;
    background: rgb(47, 192, 192);
    color: white;
    border: none;
}
</style>

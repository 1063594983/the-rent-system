<template>
    <div class="info-details">
            <el-card class="info-card">
                <div class="price">
                    <span class="price-number">15000</span>元/月(押一付三)
                </div>
                <hr>
                <div class="info">
                    <div class="info-item">
                        <span class="info-font">整租</span><br>
                        <span class="info-tip">出租方式</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">3室2厅2卫</span><br>
                        <span class="info-tip">户型</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">151平米</span><br>
                        <span class="info-tip">建筑面积</span>
                    </div>
                </div>
                <hr>
                <div class="info">
                    <div class="info-item">
                        <span class="info-font">南北</span><br>
                        <span class="info-tip">朝向</span>
                    </div>
                    <div class="info-item">
                        <span class="info-font">高层</span><br>
                        <span class="info-tip">楼层（共35层）</span>
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
                            汇豪天下 (浦东/陆家嘴)<br>
                            距9号线商城路站约799米
                        </div>
                    </div>
                    <div class="address-item">
                        <div class="address-item-title">
                            地址
                        </div>
                        <div class="address-item-content">
                            商城路108弄
                        </div>
                    </div> 
                </div>
                <hr>
                <div class="contact">
                    <div class="host-image">
                        <img src="../assets/logo.png">
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
            </el-card>
        </div>
</template>

<script>
export default {
    
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
</style>

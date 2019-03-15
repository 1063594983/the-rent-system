<template>
    <el-form ref="order-form" :model="form">
        <el-form-item label="租金(元/月">
            <el-input v-model="form.price"></el-input>
        </el-form-item>
        
        <el-form-item label="租赁模式">
            <el-radio-group v-model="form.payMethod" size="medium">
                <el-radio label="押一付三"></el-radio>
                <el-radio label="押一付五"></el-radio>
                <el-radio label="无押金"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="出租方式">
            <el-radio-group v-model="form.rentMethod" size="medium">
                <el-radio label="整租"></el-radio>
                <el-radio label="单租"></el-radio>
                <el-radio label="其他"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="户型">
            <el-input v-model="form.type" placeholder="?室?厅?卫"></el-input>
        </el-form-item>
        
        <el-form-item label="朝向">
            <el-radio-group v-model="form.direction" size="medium">      
                <el-radio label="南北"></el-radio>
                <el-radio label="东西"></el-radio>
                <el-radio label="其他"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-col :span="10">
            <el-form-item label="建筑面积(平方米)">
                <el-input v-model="form.area"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="10" :offset="4">
            <el-form-item label="楼层">
                <el-input v-model="form.height"></el-input>
            </el-form-item>
        </el-col>
        <el-form-item label="小区">
            <el-input v-model="form.part"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="其他">
            <el-input type="textarea" v-model="form.other"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                price: '',
                payMethod: '押一付三',
                rentMethod: '整租',
                type: '',
                area: '',
                direction: '南北',
                height: '',
                part: '',
                address: '',
                other: ''
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$emit('onFormSubmit');
        }
    }
}
</script>

<style scoped>

</style>

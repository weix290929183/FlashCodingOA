<style scoped>
.example {
  margin: 20px;
}
</style>
<template>
    <div class="example">
        <div>
            <Form ref="appForm" :model="formItem" label-position="left" :label-width="80" :rules="ruleValidate">      
                    <Row :gutter="16">   
                        <Col span="12">
                        <FormItem label="姓名" prop="userName">
                            <Input v-model="formItem.userName"></Input>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="手机">
                            <Input v-model="formItem.Phone"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">   
                        <Col span="12">
                        <FormItem label="账号">
                            <Input v-model="formItem.userCode"></Input>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="邮箱">
                            <Input v-model="formItem.email"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">   
                        <Col span="12">
                        <FormItem label="密码">
                            <Input v-model="formItem.password" type="password" ></Input>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="工号">
                            <Input v-model="formItem.jobNumber"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">   
                        <Col span="12">
                        <FormItem label="用户类型">
                            <Select v-model="formItem.userType" >
                                <Option v-for="item in userType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </FormItem>
                        </Col>
                        <Col span="12"></Col>
                    </Row>
                    <Row :gutter="16">   
                        <Col span="12">
                        <FormItem label="新用户标识">
                            <span><div>新用户</div><div>如果当前用户被标识为老用户，则不允许使用新一代ERP的任何系统</div></span>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="建模用户">
                            <RadioGroup v-model="formItem.isJmUser">
                                <Radio label="是" value=1></Radio>
                                <Radio label="否" value=0></Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">   
                        <Col span="12">
                        <FormItem label="是否禁用">
                            <RadioGroup v-model="formItem.isDisabled">
                                <Radio label="是"></Radio>
                                <Radio label="否"></Radio>
                            </RadioGroup>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="域账号">
                            <Input v-model="formItem.adUser"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">   
                        <Col span="24">
                        <FormItem label="备注">
                            <Input v-model="formItem.remark"  type="textarea" :rows="4"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                </FormItem>
            </Form>
        </div>
        <div>
            <Tabs value="name1">
                <TabPane label="组织和角色" name="name1">组织和角色</TabPane>
                <TabPane label="项目权限" name="name2">项目权限</TabPane>
            </Tabs>
        </div>
        <div>
            <Button type="text" @click="handleSubmit">提交</Button>
            <Button type="text">取消</Button>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    userName: '',
                    Phone: '',
                    userCode: '',
                    email: '',
                    password:'',
                    jobNumber:'',
                    userType:"",
                    isJmUser:"否",
                    isDisabled:"否",
                    adUser:"",
                    remark:""

                },
                ruleValidate:{
                    userName:[
                         { required: true, message: '用户名不允许为空', trigger: 'blur' }
                    ]
                },
                userType:[
                    {value:1,label:"ERP用户"},
                    {value:2,label:"非ERP用户"},
                    {value:3,label:"移动用户"}
                ]
            }
        },
        methods:{
            //提交
            handleSubmit(){
                let self = this;
                this.$refs["appForm"].validate((validate)=>{
                    if(validate){
                        let data = self.formItem;
                        console.log(data);       
                    };
               });
              
            }
        }
    }
</script>
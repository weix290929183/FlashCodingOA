<template>
  <div style="background:#eee;padding: 20px">
    <Card :bordered="true">
      <p slot="title">【20190321-2316】福晟集团-费用系统-付款申请点击保存时后，“申请部门”未更新</p>
      <Tabs value="tab">
        <TabPane label="基础信息" name="baseinfo">
          <Form :model="formItem" label-position="left" :label-width="80">
            <Row :gutter="16">
              <Col span="12">
                <FormItem label="需求编号">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="需求主题">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row :gutter="16">
              <Col span="12">
                <FormItem label="需求类型">
                  <Select v-model="formItem.demandType">
                    <Option
                      v-for="item in demandType"
                      :value="item.label"
                      :key="item.value"
                    >{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="需求负责人">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row :gutter="16">
              <Col span="12">
                <FormItem label="开发PM">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="明源PM">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
            </Row>
            <Row :gutter="16">
              <Col span="12">
                <FormItem label="客户">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="工作量">
                  <Input v-model="formItem.topic"></Input>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane label="进度信息" name="progress">进度信息</TabPane>
        <TabPane label="操作记录" name="else">其他</TabPane>
      </Tabs>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        topic: "123321",
        demandType:1
      },
      demandType: [
        { value: "1", label: "开发类-零星需求-一般" },
        { value: "2", label: "开发类-零星需求-紧急" },
        { value: "3", label: "开发类-专项批次" },
        { value: "4", label: "开发类-咨询评估" },
        { value: "4", label: "开发类-区域TOPN治理" }
      ]
    };
  }
};
</script>
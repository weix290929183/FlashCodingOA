<template>
<div>
    <Button>Default</Button>
    <Button type="primary" @click="click1" loading>Primary</Button>
    <Button type="dashed" icon="ios-add">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <Icon type="ios-checkmark" />
    <Icon type="ios-loading" />
</div>
</template>
<script>
    export default {
        methods:{
            click1(){
                this.$Modal.info({
                                    title: 'test',
                                    content: 'click event'
                                });
            }
        }
    }
</script>

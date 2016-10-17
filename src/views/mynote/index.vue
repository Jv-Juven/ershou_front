<style lang="less" media="screen">

</style>

<template>
    <mynote-header></mynote-header>
    <mynote-record></mynote-record>
    <mynote-list></mynote-list>
    <mynote-footer></mynote-footer>
</template>

<script type="text/javascript">
    import MynoteHeader from "./components/header"
    import MynoteRecord from "./components/record"
    import MynoteList from "./components/recordlist"
    import MynoteFooter from "./components/footerbutton"
        export default {
            data() {
                return {}
            },
          
            components: {
               MynoteHeader,
               MynoteRecord,
               MynoteList,
               MynoteFooter,
            },
            
        }

</script>



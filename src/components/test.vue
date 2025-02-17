<template>
    <div>
        <h1>食物熱量計算器</h1>
        <div v-for="item in foodItems">
            <label for="">{{ item.name }} ({{ item.caloriesPerGram }} 大卡/克)</label>
            <input class="text-black" type="number" v-model.number="item.weight" placeholder="輸入重量 (克)">
        </div>
        <h1>總熱量: {{ totalCalories }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            foodItems: [
                { name: "米飯", caloriesPerGram: 1.3, weight: "" },
                { name: "雞胸肉", caloriesPerGram: 1.65, weight: "" },
                { name: "地瓜", caloriesPerGram: 0.86, weight: "" },
                { name: "香蕉", caloriesPerGram: 0.89, weight: "" },
                { name: "雞蛋", caloriesPerGram: 1.43, weight: "" },
            ],
        }
    },
    computed: {
        totalCalories() {
            return this.foodItems.reduce((total, item) => {
                return total + item.weight * item.caloriesPerGram;
            }, 0).toFixed(2)
        },
    },
}
</script>
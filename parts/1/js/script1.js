var tasks = [
    {
        type: "option_choice",
        self_answer: undefined,
        answer_id: "t1-oG",
        input_name: "in1"

    },
    {
        type: "fill_fields",
        input_name: "in2",
        fields: [
            {
                answer_id: "t2-o1",
                self_answer: undefined,
                answer: "26"
            },
            {
                answer_id: "t2-o2",
                self_answer: undefined,
                answer: "42"
            },
            {
                answer_id: "t2-o3",
                self_answer: undefined,
                answer: "50"
            }
        ]
    },
    {
        type: "pair",
        input_name: "in3",
        active_elem: undefined,
        fields: [
            {
                pair_id: "t3-i1",
                self_answer: undefined,
                answer_id: "t3-d3"
            },
            {
                pair_id: "t3-i2",
                self_answer: undefined,
                answer_id: "t3-d1"
            },
            {
                pair_id: "t3-i3",
                self_answer: undefined,
                answer_id: "t3-d2"
            }
        ]
    },
    {
        type: "check_fields",
        input_name: "in4",
        fields: [
            {
                value: undefined,
                answer: ["53"],
                answer_id: "t4-o1"
            },
            {
                value: undefined,
                answer: ["50", "3"],
                answer_id: "t4-o2"
            },
            {
                value: undefined,
                answer: ["50", "3"],
                answer_id: "t4-o3"
            }

        ]

    },
    {
        type: "select_fields",
        input_name: "in5",
        fields: [
            {
                value: undefined,
                select: ["=", ">", "<"],
                answer: "<",
                answer_id: "t5-o1"
            },
            {
                value: undefined,
                select: ["=", ">", "<"],
                answer: ">",
                answer_id: "t5-o2"
            },
            {
                value: undefined,
                select: ["=", ">", "<"],
                answer: ">",
                answer_id: "t5-o3"
            }

        ]

    }
]
window.addEventListener('load', function() {
    pair("task_1_3")
});
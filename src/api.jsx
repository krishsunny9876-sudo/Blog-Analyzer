import axios from "axios";

export const analyzeBlog = async (text) => {

    // try {
    //     const response = await axios.post(
    //         "http://localhost:5000/analyze",
    //         { text }
    //     );

    //     return response.data;
    // }
    // catch (error) {
    //     console.log("Error fetching data:", error);
    //     return null;
    // }

    const data = {
        aiScore: 72,
        plagiarismScore: 28,
        issues: [
            { text: "AI generated content detected" }
        ],
        fixedContent: "Improved Version which is more feels like natural, As it is written by Human"
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetch Success");
            resolve(data);
        }, 1000);
    });
};
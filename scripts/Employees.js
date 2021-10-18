import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        // target is how we target what we click on 
        const itemClicked = clickEvent.target
        // using .target to target anything that stars with employee, refer to your for of loop creating html text
        if (itemClicked.id.startsWith("employee")) {
            // storing what is clicked in an array, .split will seperate everything other than what we want
            const [, employeeId] = itemClicked.id.split("--")

            // see if the employee.id is equal to employeeid
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    // not sure what this does, wasn't covered in this morning's example
                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter"
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


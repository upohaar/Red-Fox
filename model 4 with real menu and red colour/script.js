// Restaurant App Data and Functions
function restaurantApp() {
    return {
        // Categories Data
        categories: [
            { 
                id: 'burgers', 
                name: 'Burger & Snacks', 
                icon: 'sandwich',
                gradient: 'bg-gradient-to-br from-red-400 to-red-500',
                count: 19
            },
            { 
                id: 'drinks', 
                name: 'Drinks & Shakes', 
                icon: 'coffee',
                gradient: 'bg-gradient-to-br from-blue-400 to-cyan-500',
                count: 14
            },
            { 
                id: 'shawarma', 
                name: 'Sandwich & Shawarma', 
                icon: 'utensils',
                gradient: 'bg-gradient-to-br from-green-400 to-emerald-500',
                count: 9
            },
            { 
                id: 'juice', 
                name: 'জুস (Juice)', 
                icon: 'cup-soda',
                gradient: 'bg-gradient-to-br from-red-400 to-yellow-500',
                count: 11
            },
            { 
                id: 'pizza', 
                name: 'Pizza', 
                icon: 'pizza',
                gradient: 'bg-gradient-to-br from-purple-400 to-pink-500',
                count: 7
            },
            { 
                id: 'fuchka', 
                name: 'ফুসকা ও চটপটি', 
                icon: 'soup',
                gradient: 'bg-gradient-to-br from-amber-400 to-red-500',
                count: 7
            }
        ],
        
        // Menu Items Data
        menuData: {
            // Burgers & Snacks
            burgers: [
                { 
                    name: 'Student Burger', 
                    price: '৬০', 
                    desc: 'Perfect burger for students - tasty and affordable', 
                    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
                    popular: true
                },
                { 
                    name: 'Crispy Chicken Burger', 
                    price: '৭০', 
                    desc: 'Crispy fried chicken patty with fresh veggies', 
                    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300',
                    popular: true
                },
                { 
                    name: 'Dragon Burger', 
                    price: '৮০', 
                    desc: 'Spicy dragon sauce with grilled chicken', 
                    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300'
                },
                { 
                    name: 'Naga with Chicken Tikka', 
                    price: '৯০', 
                    desc: 'Fiery naga sauce with juicy chicken tikka', 
                    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300'
                },
                { 
                    name: 'Smoked Burger', 
                    price: '৯০', 
                    desc: 'Smoky flavored beef patty with special sauce', 
                    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300'
                },
                { 
                    name: 'Crispy Chicken Burger (Big)', 
                    price: '১২০', 
                    desc: 'Larger version with double crispy chicken', 
                    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300',
                    popular: true
                },
                { 
                    name: 'Smoked with Naga', 
                    price: '১০০', 
                    desc: 'Perfect blend of smoke and spice', 
                    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300'
                },
                { 
                    name: 'Chicken Burger', 
                    price: '৯০', 
                    desc: 'Classic grilled chicken burger', 
                    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300'
                },
                { 
                    name: 'Sub Burger', 
                    price: '১২০', 
                    desc: 'Long sub-style burger loaded with toppings', 
                    image: 'https://images.unsplash.com/photo-1619740455993-a42d6b716b0d?w=300'
                },
                { 
                    name: 'Fried Burger', 
                    price: '১৩০', 
                    desc: 'Deep fried burger with crispy coating', 
                    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300'
                },
                { 
                    name: 'Crispy Chicken with Cheese Burger', 
                    price: '১৩০', 
                    desc: 'Crispy chicken topped with melted cheese', 
                    image: 'https://images.unsplash.com/photo-1591234555487-7d6828caac17?w=300'
                },
                { 
                    name: 'Cheese Burger (Big)', 
                    price: '১৩০', 
                    desc: 'Loaded with extra cheese and beef patty', 
                    image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=300'
                },
                { 
                    name: 'Red Fox Special Burger', 
                    price: '১৫০', 
                    desc: 'Our signature burger with secret sauce', 
                    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300',
                    popular: true
                },
                { 
                    name: 'Jumbo Burger', 
                    price: '২০০', 
                    desc: 'Massive burger for big appetite', 
                    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300'
                },
                { 
                    name: 'Chicken Fry', 
                    price: '৮০', 
                    desc: 'Golden fried chicken pieces', 
                    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300'
                },
                { 
                    name: 'Spicy Chicken', 
                    price: '৯০', 
                    desc: 'Hot and spicy fried chicken', 
                    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300'
                },
                { 
                    name: 'French Fries', 
                    price: '১০০', 
                    desc: 'Crispy golden french fries', 
                    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300'
                },
                { 
                    name: 'French Fries with Sauce', 
                    price: '১৫০', 
                    desc: 'Fries served with special dipping sauces', 
                    image: 'https://images.unsplash.com/photo-1630431341973-02e4a71becc4?w=300'
                },
                { 
                    name: 'Pata Tina Chicken Alu Pora', 
                    price: '২০০', 
                    desc: 'Stuffed pastry with chicken and mashed potato', 
                    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300'
                }
            ],
            
            // Drinks & Shakes
            drinks: [
                { 
                    name: 'Chocolate Cold Coffee', 
                    price: '৮০', 
                    desc: 'Rich chocolate blended with cold coffee', 
                    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300',
                    popular: true
                },
                { 
                    name: 'Strawberry Shake', 
                    price: '১০০', 
                    desc: 'Fresh strawberry milkshake', 
                    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300',
                    popular: true
                },
                { 
                    name: 'Chocolate Milkshake', 
                    price: '১০০', 
                    desc: 'Creamy chocolate milkshake', 
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300'
                },
                { 
                    name: 'Chocolate Lacchi', 
                    price: '১০০', 
                    desc: 'Chocolate flavored traditional lassi', 
                    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300'
                },
                { 
                    name: 'Cold Coffee with Ice Cream', 
                    price: '১২০', 
                    desc: 'Refreshing cold coffee topped with ice cream', 
                    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300',
                    popular: true
                },
                { 
                    name: 'Red Fox Special Lacchi', 
                    price: '১০০', 
                    desc: 'Our signature lassi recipe', 
                    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=300'
                },
                { 
                    name: 'Lacchi', 
                    price: '৭০', 
                    desc: 'Traditional sweet lassi', 
                    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300'
                },
                { 
                    name: 'Oreo Shake', 
                    price: '১২০', 
                    desc: 'Creamy shake with crushed Oreo cookies', 
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300'
                },
                { 
                    name: 'Oreo Strawberry Shake', 
                    price: '১২০', 
                    desc: 'Perfect blend of Oreo and strawberry', 
                    image: 'https://images.unsplash.com/photo-1638913662252-70efce1e60a7?w=300'
                },
                { 
                    name: 'Mango Shake', 
                    price: '১০০', 
                    desc: 'Fresh mango milkshake', 
                    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300'
                },
                { 
                    name: 'Regular Cold Coffee', 
                    price: '৭০', 
                    desc: 'Classic cold coffee', 
                    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300'
                },
                { 
                    name: 'Chocolate Shake', 
                    price: '৮০', 
                    desc: 'Rich chocolate shake', 
                    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300'
                },
                { 
                    name: 'Hot Coffee', 
                    price: '৫০', 
                    desc: 'Freshly brewed hot coffee', 
                    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300'
                },
                { 
                    name: 'Black Coffee', 
                    price: '৫০', 
                    desc: 'Strong black coffee', 
                    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300'
                }
            ],
            
            // Sandwich & Shawarma
            shawarma: [
                { 
                    name: 'Vegetable Shawarma', 
                    price: '৬০', 
                    desc: 'Fresh vegetables wrapped in soft bread', 
                    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300'
                },
                { 
                    name: 'Chicken Shawarma', 
                    price: '১০০', 
                    desc: 'Grilled chicken with garlic sauce', 
                    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300',
                    popular: true
                },
                { 
                    name: 'Sub Sandwich (Regular)', 
                    price: '১২০', 
                    desc: 'Classic submarine sandwich', 
                    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300'
                },
                { 
                    name: 'Sub Sandwich with Naga', 
                    price: '১৩০', 
                    desc: 'Spicy naga sauce added', 
                    image: 'https://images.unsplash.com/photo-1619740455993-a42d6b716b0d?w=300'
                },
                { 
                    name: 'Sub Sandwich with Cheese', 
                    price: '১৫০', 
                    desc: 'Loaded with melted cheese', 
                    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300',
                    popular: true
                },
                { 
                    name: 'Love Sub Sandwich', 
                    price: '১৩০', 
                    desc: 'Special romantic combo sandwich', 
                    image: 'https://images.unsplash.com/photo-1592415499556-430d3e5e2aa6?w=300'
                },
                { 
                    name: 'BBQ Sub Sandwich', 
                    price: '১৫০', 
                    desc: 'BBQ chicken with smoky sauce', 
                    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300'
                },
                { 
                    name: 'Chicken Sandwich', 
                    price: '৫০', 
                    desc: 'Simple grilled chicken sandwich', 
                    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=300'
                },
                { 
                    name: 'Club Sandwich', 
                    price: '৮০', 
                    desc: 'Triple-decker club sandwich', 
                    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300'
                }
            ],
            
            // Juice (জুস)
            juice: [
                { 
                    name: 'ফালুদা', 
                    price: '১৩০', 
                    desc: 'Traditional Bengali falooda dessert drink', 
                    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300',
                    popular: true
                },
                { 
                    name: 'লেমন জুস', 
                    price: '২০', 
                    desc: 'Fresh lemon juice', 
                    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300'
                },
                { 
                    name: 'মাল্টা জুস', 
                    price: '৮০', 
                    desc: 'Sweet orange juice', 
                    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300'
                },
                { 
                    name: 'মিন্ট লেমনেড জুস', 
                    price: '৫০', 
                    desc: 'Refreshing mint lemonade', 
                    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300'
                },
                { 
                    name: 'পেঁপে জুস', 
                    price: '১০০', 
                    desc: 'Fresh papaya juice', 
                    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300'
                },
                { 
                    name: 'কাঁচা আমের জুস', 
                    price: '৫০', 
                    desc: 'Green mango juice', 
                    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=300'
                },
                { 
                    name: 'ম্যাংগো জুস', 
                    price: '৭০', 
                    desc: 'Sweet mango juice', 
                    image: 'https://images.unsplash.com/photo-1605536663533-5bc6250748ce?w=300',
                    popular: true
                },
                { 
                    name: 'পেয়ারা জুস', 
                    price: '৭০', 
                    desc: 'Fresh guava juice', 
                    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300'
                },
                { 
                    name: 'আঙ্গুর জুস', 
                    price: '১০০', 
                    desc: 'Fresh grape juice', 
                    image: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=300'
                },
                { 
                    name: 'আনারস জুস', 
                    price: '৮০', 
                    desc: 'Sweet pineapple juice', 
                    image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=300'
                },
                { 
                    name: 'ড্রাগন জুস', 
                    price: '১২০', 
                    desc: 'Exotic dragon fruit juice', 
                    image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=300'
                }
            ],
            
            // Pizza
            pizza: [
                { 
                    name: 'Pizza Margherita (10")', 
                    price: '৩০০', 
                    desc: 'Cheese, Tomato, Olive', 
                    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300',
                    popular: true
                },
                { 
                    name: 'Pizza Margherita (13")', 
                    price: '৪০০', 
                    desc: 'Cheese, Tomato, Olive - Large size', 
                    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300'
                },
                { 
                    name: 'Pizza Pollo (10")', 
                    price: '৩৫০', 
                    desc: 'Cheese, Chicken, Olive, Mushroom', 
                    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
                    popular: true
                },
                { 
                    name: 'Pizza Pollo (13")', 
                    price: '৪৫০', 
                    desc: 'Cheese, Chicken, Olive, Mushroom - Large', 
                    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300'
                },
                { 
                    name: 'Mix Pizza (13")', 
                    price: '৫৫০', 
                    desc: 'All toppings mixed together', 
                    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300',
                    popular: true
                },
                { 
                    name: 'Red Fox Special Pizza (6")', 
                    price: '১৫০', 
                    desc: 'Our signature mini pizza', 
                    image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=300'
                },
                { 
                    name: 'Chicken Pizza (6")', 
                    price: '১০০', 
                    desc: 'Small chicken pizza', 
                    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300'
                }
            ],
            
            // Fuchka & Chatpati (ফুসকা ও চটপটি)
            fuchka: [
                { 
                    name: 'দেশী ফুসকা', 
                    price: '৬০', 
                    desc: 'Traditional Bengali puchka', 
                    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300',
                    popular: true
                },
                { 
                    name: 'পানি পুরি', 
                    price: '৬০', 
                    desc: 'Water filled crispy puri', 
                    image: 'https://images.unsplash.com/photo-1626074353765-517a65ead1c2?w=300'
                },
                { 
                    name: 'ইন্ডিয়ান ফুসকা', 
                    price: '৮০', 
                    desc: 'Indian style pani puri', 
                    image: 'https://images.unsplash.com/photo-1630851840633-d0e5c2b6c25f?w=300'
                },
                { 
                    name: 'দই ফুসকা', 
                    price: '১৫০', 
                    desc: 'Fuchka with yogurt topping', 
                    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300',
                    popular: true
                },
                { 
                    name: 'চটপটি', 
                    price: '৬০', 
                    desc: 'Spicy street food mix', 
                    image: 'https://images.unsplash.com/photo-1596097635667-9b5e3cf0e4e5?w=300',
                    popular: true
                },
                { 
                    name: 'নাগা ফুসকা', 
                    price: '৮০', 
                    desc: 'Extra spicy naga fuchka', 
                    image: 'https://images.unsplash.com/photo-1625937329935-93af0a45d9fe?w=300'
                },
                { 
                    name: 'নাগা চটপটি', 
                    price: '৮০', 
                    desc: 'Extra spicy naga chatpati', 
                    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300'
                }
            ]
        },
        
        // Initialize Function
        init() { 
            // Initialize Lucide icons
            lucide.createIcons();
            
            // Re-initialize icons when page changes
            this.$watch('currentPage', () => {
                setTimeout(() => lucide.createIcons(), 100);
            });
        }
    }
}

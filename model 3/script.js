// Restaurant App Data and Functions
function restaurantApp() {
    return {
        // Categories Data
        categories: [
            { 
                id: 'breakfast', 
                name: 'নাস্তা', 
                icon: 'coffee',
                gradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
                count: 6
            },
            { 
                id: 'lunch', 
                name: 'দুপুরের খাবার', 
                icon: 'utensils',
                gradient: 'bg-gradient-to-br from-green-400 to-emerald-500',
                count: 8
            },
            { 
                id: 'dinner', 
                name: 'রাতের খাবার', 
                icon: 'moon-star',
                gradient: 'bg-gradient-to-br from-purple-400 to-indigo-500',
                count: 7
            },
            { 
                id: 'drinks', 
                name: 'পানীয়', 
                icon: 'glass-water',
                gradient: 'bg-gradient-to-br from-blue-400 to-cyan-500',
                count: 5
            }
        ],
        
        // Menu Items Data
        menuData: {
            // Breakfast Items
            breakfast: [
                { 
                    name: 'পরোটা ও ডাল ভাজি', 
                    price: '৫০', 
                    desc: 'মচমচে পরোটা সাথে স্পেশাল ডাল ভাজি ও আচার', 
                    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=300',
                    popular: true
                },
                { 
                    name: 'ডিম অমলেট', 
                    price: '৩০', 
                    oldPrice: '৪০',
                    desc: 'পিঁয়াজ-মরিচ দিয়ে ভাজা দেশি ডিম', 
                    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300'
                },
                { 
                    name: 'খিচুড়ি', 
                    price: '৮০', 
                    desc: 'মসলাদার ভুনা খিচুড়ি সাথে ভর্তা', 
                    image: 'https://images.unsplash.com/photo-1596097635667-9b5e3cf0e4e5?w=300',
                    popular: true
                },
                { 
                    name: 'মুড়ি মাখা', 
                    price: '২৫', 
                    desc: 'তেল মরিচ দিয়ে ঝাল মুড়ি', 
                    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300'
                },
                { 
                    name: 'হালুয়া পুরি', 
                    price: '৭০', 
                    desc: 'মিষ্টি হালুয়া ও ফোলা পুরি', 
                    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300'
                },
                { 
                    name: 'চা ও বিস্কুট', 
                    price: '১৫', 
                    desc: 'দেশি চা ও ক্রিম বিস্কুট', 
                    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300'
                }
            ],
            
            // Lunch Items
            lunch: [
                { 
                    name: 'চিকেন বিরিয়ানি', 
                    price: '১৮০', 
                    desc: 'খাস বাসমতি চাল ও দেশি মুরগির বিশেষ বিরিয়ানি', 
                    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300',
                    popular: true
                },
                { 
                    name: 'বিফ কাচ্চি', 
                    price: '২৫০', 
                    oldPrice: '৩০০',
                    desc: 'স্পেশাল কাচ্চি বিরিয়ানি সাথে কাবাব', 
                    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300',
                    popular: true
                },
                { 
                    name: 'ভুনা খিচুড়ি', 
                    price: '১২০', 
                    desc: 'বিশেষ মসলাদার ভুনা খিচুড়ি', 
                    image: 'https://images.unsplash.com/photo-1596097635667-9b5e3cf0e4e5?w=300'
                },
                { 
                    name: 'ইলিশ ভাজা', 
                    price: '৩০০', 
                    desc: 'তাজা ইলিশ মাছ ভাজা ও ভাত', 
                    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300'
                },
                { 
                    name: 'মাটন কারি', 
                    price: '২২০', 
                    desc: 'দেশি খাসির মাংস ঝোল ভাতের সাথে', 
                    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300'
                },
                { 
                    name: 'ডাল-ভাত সেট', 
                    price: '৯০', 
                    desc: 'ডাল, সবজি ও ভাত', 
                    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=300'
                },
                { 
                    name: 'রুই মাছ', 
                    price: '১৮০', 
                    desc: 'ঝোল সহ রুই মাছ ও ভাত', 
                    image: 'https://images.unsplash.com/photo-1580959375944-1ab5ba4b2a77?w=300'
                },
                { 
                    name: 'মিক্সড ভেজিটেবল', 
                    price: '৮০', 
                    desc: 'তরকারি ভর্তা সাথে ভাত', 
                    image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=300'
                }
            ],
            
            // Dinner Items
            dinner: [
                { 
                    name: 'শিক কাবাব', 
                    price: '১৫০', 
                    desc: 'রুমালি রুটির সাথে বিফ শিক কাবাব ও চাটনি', 
                    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300',
                    popular: true
                },
                { 
                    name: 'চিকেন রোস্ট', 
                    price: '২০০', 
                    desc: 'পোলাও সাথে চিকেন রোস্ট', 
                    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300'
                },
                { 
                    name: 'তেহারি', 
                    price: '১৬০', 
                    oldPrice: '১৮০',
                    desc: 'বিফ তেহারি সাথে রায়তা', 
                    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300'
                },
                { 
                    name: 'ফিশ ফ্রাই', 
                    price: '১৪০', 
                    desc: 'ক্রিস্পি ফিশ ফ্রাই সাথে চিপস', 
                    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300'
                },
                { 
                    name: 'চিংড়ি পোলাও', 
                    price: '২৮০', 
                    desc: 'গলদা চিংড়ি সাথে পোলাও', 
                    image: 'https://images.unsplash.com/photo-1633321702518-40091927eb38?w=300',
                    popular: true
                },
                { 
                    name: 'মিক্স গ্রিল', 
                    price: '৩২০', 
                    desc: 'চিকেন ও বিফ গ্রিল প্লেটার', 
                    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300'
                },
                { 
                    name: 'ফ্রাইড রাইস', 
                    price: '১১০', 
                    desc: 'স্পেশাল ভেজিটেবল ফ্রাইড রাইস', 
                    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300'
                }
            ],
            
            // Drinks Items
            drinks: [
                { 
                    name: 'বোরহানি', 
                    price: '৪০', 
                    desc: 'টক দই ও মশলার শাহী পানীয়', 
                    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=300',
                    popular: true
                },
                { 
                    name: 'লাচ্ছি', 
                    price: '৫০', 
                    desc: 'মিষ্টি লাচ্ছি ঠান্ডা', 
                    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300'
                },
                { 
                    name: 'ফালুদা', 
                    price: '৮০', 
                    oldPrice: '১০০',
                    desc: 'স্পেশাল রয়েল ফালুদা', 
                    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300'
                },
                { 
                    name: 'লেবু শরবত', 
                    price: '৩০', 
                    desc: 'টাটকা লেবুর শরবত', 
                    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300'
                },
                { 
                    name: 'কোক', 
                    price: '৩৫', 
                    desc: 'ঠান্ডা কোকাকোলা', 
                    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300'
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

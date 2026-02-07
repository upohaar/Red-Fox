function restaurantOrderApp() {
    return {
        // Current page state
        currentPage: 'menu',
        
        // Categories
        categories: [
            { id: 'all', name: 'সব' },
            { id: 'breakfast', name: 'নাস্তা' },
            { id: 'lunch', name: 'দুপুর' },
            { id: 'dinner', name: 'রাত' },
            { id: 'drinks', name: 'পানীয়' }
        ],
        
        selectedCategory: 'all',
        
        // Menu items
        menuItems: [
            // Breakfast
            { id: 1, category: 'breakfast', name: 'পরোটা ও ডাল ভাজি', price: 50, desc: 'মচমচে পরোটা সাথে স্পেশাল ডাল ভাজি ও আচার', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=300', popular: true },
            { id: 2, category: 'breakfast', name: 'ডিম অমলেট', price: 30, oldPrice: 40, desc: 'পিঁয়াজ-মরিচ দিয়ে ভাজা দেশি ডিম', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300' },
            { id: 3, category: 'breakfast', name: 'খিচুড়ি', price: 80, desc: 'মসলাদার ভুনা খিচুড়ি সাথে ভর্তা', image: 'https://images.unsplash.com/photo-1596097635667-9b5e3cf0e4e5?w=300', popular: true },
            
            // Lunch
            { id: 4, category: 'lunch', name: 'চিকেন বিরিয়ানি', price: 180, desc: 'খাস বাসমতি চাল ও দেশি মুরগির বিশেষ বিরিয়ানি', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300', popular: true },
            { id: 5, category: 'lunch', name: 'বিফ কাচ্চি', price: 250, oldPrice: 300, desc: 'স্পেশাল কাচ্চি বিরিয়ানি সাথে কাবাব', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300', popular: true },
            { id: 6, category: 'lunch', name: 'ইলিশ ভাজা', price: 300, desc: 'তাজা ইলিশ মাছ ভাজা ও ভাত', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300' },
            { id: 7, category: 'lunch', name: 'মাটন কারি', price: 220, desc: 'দেশি খাসির মাংস ঝোল ভাতের সাথে', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300' },
            
            // Dinner
            { id: 8, category: 'dinner', name: 'শিক কাবাব', price: 150, desc: 'রুমালি রুটির সাথে বিফ শিক কাবাব ও চাটনি', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300', popular: true },
            { id: 9, category: 'dinner', name: 'চিকেন রোস্ট', price: 200, desc: 'পোলাও সাথে চিকেন রোস্ট', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' },
            { id: 10, category: 'dinner', name: 'চিংড়ি পোলাও', price: 280, desc: 'গলদা চিংড়ি সাথে পোলাও', image: 'https://images.unsplash.com/photo-1633321702518-40091927eb38?w=300', popular: true },
            
            // Drinks
            { id: 11, category: 'drinks', name: 'বোরহানি', price: 40, desc: 'টক দই ও মশলার শাহী পানীয়', image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=300', popular: true },
            { id: 12, category: 'drinks', name: 'লাচ্ছি', price: 50, desc: 'মিষ্টি লাচ্ছি ঠান্ডা', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300' },
            { id: 13, category: 'drinks', name: 'ফালুদা', price: 80, oldPrice: 100, desc: 'স্পেশাল রয়েল ফালুদা', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300' }
        ],
        
        // Cart
        cart: [],
        
        // Coupon
        couponCode: '',
        discount: 0,
        deliveryCharge: 50,
        
        // User & Auth
        user: null,
        loginData: { phone: '', password: '' },
        registerData: { name: '', phone: '', address: '', password: '' },
        
        // Orders
        orders: [],
        currentOrder: null,
        
        // Payment
        paymentMethod: 'cod',
        
        // Order Tracking
        showTrackingModal: false,
        trackingOrder: null,
        
        // Computed: Filtered Menu
        get filteredMenu() {
            if (this.selectedCategory === 'all') {
                return this.menuItems;
            }
            return this.menuItems.filter(item => item.category === this.selectedCategory);
        },
        
        // Computed: Subtotal
        get subtotal() {
            return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },
        
        // Computed: Total
        get total() {
            return this.subtotal - this.discount + this.deliveryCharge;
        },
        
        // Add to cart
        addToCart(item) {
            const existingItem = this.cart.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ ...item, quantity: 1 });
            }
            this.showNotification('ঝুড়িতে যোগ হয়েছে!');
            lucide.createIcons();
        },
        
        // Update quantity
        updateQuantity(index, change) {
            this.cart[index].quantity += change;
            if (this.cart[index].quantity <= 0) {
                this.removeFromCart(index);
            }
        },
        
        // Remove from cart
        removeFromCart(index) {
            this.cart.splice(index, 1);
            lucide.createIcons();
        },
        
        // Apply coupon
        applyCoupon() {
            const coupons = {
                'MAMA10': 10, // 10% off
                'FIRST50': 50, // 50 taka off
                'SAVE100': 100 // 100 taka off
            };
            
            const coupon = this.couponCode.toUpperCase();
            if (coupons[coupon]) {
                if (coupon.includes('%')) {
                    this.discount = Math.round(this.subtotal * coupons[coupon] / 100);
                } else {
                    this.discount = coupons[coupon];
                }
                this.showNotification('কুপন প্রয়োগ হয়েছে!');
            } else {
                this.showNotification('ভুল কুপন কোড!', 'error');
                this.discount = 0;
            }
        },
        
        // Login
        login() {
            // Demo login - in real app, validate against backend
            const demoUser = {
                name: 'রহিম উদ্দিন',
                phone: this.loginData.phone,
                address: 'মিরপুর ১০, ঢাকা'
            };
            
            this.user = demoUser;
            localStorage.setItem('user', JSON.stringify(demoUser));
            this.currentPage = 'menu';
            this.showNotification('লগইন সফল হয়েছে!');
        },
        
        // Register
        register() {
            // Demo register
            this.user = { ...this.registerData };
            localStorage.setItem('user', JSON.stringify(this.user));
            this.currentPage = 'menu';
            this.showNotification('রেজিস্ট্রেশন সফল হয়েছে!');
        },
        
        // Logout
        logout() {
            this.user = null;
            this.cart = [];
            this.orders = [];
            localStorage.removeItem('user');
            localStorage.removeItem('orders');
            this.currentPage = 'menu';
            this.showNotification('লগআউট হয়েছে');
        },
        
        // Place order
        placeOrder() {
            if (!this.paymentMethod) {
                this.showNotification('পেমেন্ট পদ্ধতি বেছে নিন', 'error');
                return;
            }
            
            const order = {
                id: 'ORD' + Date.now().toString().slice(-6),
                date: new Date().toLocaleDateString('bn-BD'),
                items: [...this.cart],
                subtotal: this.subtotal,
                discount: this.discount,
                deliveryCharge: this.deliveryCharge,
                total: this.total,
                paymentMethod: this.paymentMethod,
                status: 'pending',
                user: { ...this.user }
            };
            
            this.orders.unshift(order);
            this.currentOrder = order;
            
            // Save to localStorage
            localStorage.setItem('orders', JSON.stringify(this.orders));
            
            // Show success page
            this.currentPage = 'order-success';
            
            // Reset
            this.cart = [];
            this.discount = 0;
            this.couponCode = '';
            
            setTimeout(() => lucide.createIcons(), 100);
        },
        
        // Track order
        trackOrder(order) {
            this.trackingOrder = order;
            this.showTrackingModal = true;
            setTimeout(() => lucide.createIcons(), 100);
        },
        
        // Get payment method name
        getPaymentMethodName(method) {
            const methods = {
                'bkash': 'bKash',
                'nagad': 'Nagad',
                'cod': 'ক্যাশ অন ডেলিভারি'
            };
            return methods[method] || method;
        },
        
        // Get status text
        getStatusText(status) {
            const statuses = {
                'pending': 'প্রক্রিয়াধীন',
                'preparing': 'প্রস্তুত হচ্ছে',
                'ready': 'প্রস্তুত',
                'on-the-way': 'পথে আছে',
                'delivered': 'ডেলিভার হয়েছে'
            };
            return statuses[status] || status;
        },
        
        // Show notification
        showNotification(message, type = 'success') {
            // Simple alert for now - can be enhanced with toast library
            alert(message);
        },
        
        // Initialize
        init() {
            // Load user from localStorage
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                this.user = JSON.parse(savedUser);
            }
            
            // Load orders from localStorage
            const savedOrders = localStorage.getItem('orders');
            if (savedOrders) {
                this.orders = JSON.parse(savedOrders);
            }
            
            // Initialize icons
            lucide.createIcons();
            
            // Re-init icons on page change
            this.$watch('currentPage', () => {
                setTimeout(() => lucide.createIcons(), 100);
            });
            
            // Demo: Update order status (in real app, this comes from backend)
            setInterval(() => {
                this.orders.forEach(order => {
                    if (order.status === 'pending') {
                        order.status = 'preparing';
                    } else if (order.status === 'preparing') {
                        order.status = 'ready';
                    } else if (order.status === 'ready') {
                        order.status = 'on-the-way';
                    } else if (order.status === 'on-the-way') {
                        order.status = 'delivered';
                    }
                });
                localStorage.setItem('orders', JSON.stringify(this.orders));
            }, 30000); // Update every 30 seconds (demo only)
        }
    }
}

// Dados dos produtos
const products = [
    // Hambúrgueres
    {
        id: 1,
        name: "Faraó Supremo",
        description: "Hambúrguer de 300g, queijo ouro derretido, bacon crocante, cebola caramelizada e molho especial da tumba",
        price: 35.90,
        category: "burger",
        emoji: "👑",
        badge: "Mais Vendido"
    },
    {
        id: 2,
        name: "Múmia Burguer",
        description: "Duplo hambúrguer envolto em queijo coalho, alface, tomate e maionese temperada",
        price: 32.90,
        category: "burger",
        emoji: "🤕",
        badge: "Novo"
    },
    {
        id: 3,
        name: "Pirâmide Dupla",
        description: "Três carnes, três queijos, picles egípcios e molho secreto dos deuses",
        price: 39.90,
        category: "burger",
        emoji: "🔺",
        badge: null
    },
    {
        id: 4,
        name: "Sphinx Bacon",
        description: "Hambúrguer artesanal, bacon em dobro, cheddar cremoso e cebola crispy",
        price: 29.90,
        category: "burger",
        emoji: "🦁",
        badge: null
    },
    {
        id: 5,
        name: "Tutancâmon BBQ",
        description: "Carne suculenta com molho barbecue especial, onion rings e queijo prato",
        price: 31.90,
        category: "burger",
        emoji: "⚰️",
        badge: null
    },
    
    // Frangos
    {
        id: 6,
        name: "Horus Crispy",
        description: "Filé de frango empanado crocante, salada especial e molho rosé",
        price: 26.90,
        category: "chicken",
        emoji: "🦅",
        badge: "Top 3"
    },
    {
        id: 7,
        name: "Íbis Grelhado",
        description: "Peito de frango grelhado, queijo branco, rúcula e tomate seco",
        price: 24.90,
        category: "chicken",
        emoji: "🐦",
        badge: null
    },
    {
        id: 8,
        name: "Nilo Picante",
        description: "Frango apimentado com pimenta jalapeño, cheddar e maionese picante",
        price: 27.90,
        category: "chicken",
        emoji: "🌶️",
        badge: "Hot"
    },
    
    // Saladas
    {
        id: 9,
        name: "Cleópatra Salad",
        description: "Mix de folhas, queijo feta, azeitonas pretas, tomate cereja e molho de ervas",
        price: 22.90,
        category: "salad",
        emoji: "👸",
        badge: "Light"
    },
    {
        id: 10,
        name: "Nilo Verde",
        description: "Alface romana, rúcula, pepino, cebola roxa e molho de iogurte",
        price: 19.90,
        category: "salad",
        emoji: "🥗",
        badge: null
    },
    {
        id: 11,
        name: "Faraó Fitness",
        description: "Peito de frango grelhado, mix de folhas, quinoa e molho de mostarda",
        price: 28.90,
        category: "salad",
        emoji: "💪",
        badge: "Fit"
    },
    
    // Bebidas
    {
        id: 12,
        name: "Néctar dos Deuses",
        description: "Suco natural de laranja, manga e maracujá - 500ml",
        price: 12.90,
        category: "drink",
        emoji: "🥤",
        badge: null
    },
    {
        id: 13,
        name: "Coca-Cola Egípcia",
        description: "Coca-Cola gelada no cálice dourado - 350ml",
        price: 8.90,
        category: "drink",
        emoji: "🥤",
        badge: null
    },
    {
        id: 14,
        name: "Cerveja Osiris",
        description: "Cerveja artesanal especial da casa - 600ml",
        price: 16.90,
        category: "drink",
        emoji: "🍺",
        badge: "Artesanal"
    },
    {
        id: 15,
        name: "Água do Nilo",
        description: "Água mineral sem gás - 500ml",
        price: 5.90,
        category: "drink",
        emoji: "💧",
        badge: null
    },
    {
        id: 16,
        name: "Milkshake Faraônico",
        description: "Milkshake de chocolate belga com chantilly e calda de caramelo",
        price: 18.90,
        category: "drink",
        emoji: "🥤",
        badge: "Doce"
    },
    
    // Aperitivos
    {
        id: 17,
        name: "Bastet Nuggets",
        description: "10 nuggets de frango crocantes com molho barbecue",
        price: 19.90,
        category: "appetizer",
        emoji: "🐱",
        badge: null
    },
    {
        id: 18,
        name: "Anúbis Fries",
        description: "Batatas fritas crocantes com cheddar e bacon",
        price: 23.90,
        category: "appetizer",
        emoji: "🍟",
        badge: "Clássico"
    },
    {
        id: 19,
        name: "Múmias de Queijo",
        description: "Palitos de muçarela empanados e fritos, servidos com molho marinara",
        price: 21.90,
        category: "appetizer",
        emoji: "🧀",
        badge: null
    },
    {
        id: 20,
        name: "Asas de Ísis",
        description: "10 asinhas de frango apimentadas com molho especial",
        price: 29.90,
        category: "appetizer",
        emoji: "🍗",
        badge: "Picante"
    },
    {
        id: 21,
        name: "Cebolas do Deserto",
        description: "Anéis de cebola empanados e crocantes",
        price: 17.90,
        category: "appetizer",
        emoji: "🧅",
        badge: null
    }
];

// Estado do carrinho
let cart = [];
let deliveryFee = 5;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
    updateCartCount();
});

// Renderizar menu
function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    const badge = product.badge 
        ? `<span class="product-badge">${product.badge}</span>` 
        : '';
    
    card.innerHTML = `
        ${badge}
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Filtrar menu
function filterMenu(category) {
    // Atualizar botões
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.filter-btn').classList.add('active');
    
    // Renderizar produtos
    renderMenu(category);
}

// Adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Atualizar carrinho
function updateCart() {
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

// Atualizar contador
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Renderizar itens do carrinho
function renderCartItems() {
    const container = document.getElementById('cartItems');
    const emptyMsg = document.getElementById('cartEmpty');
    const footer = document.getElementById('cartFooter');
    
    if (cart.length === 0) {
        container.innerHTML = '';
        emptyMsg.style.display = 'block';
        footer.style.display = 'none';
        return;
    }
    
    emptyMsg.style.display = 'none';
    footer.style.display = 'block';
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Atualizar quantidade
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Remover do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Atualizar total
function updateCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;
    
    document.getElementById('totalPrice').textContent = `R$ ${total.toFixed(2)}`;
}

// Toggle carrinho
function toggleCart() {
    const modal = document.getElementById('cartModal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Abrir checkout
function openCheckout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    toggleCart();
    
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.add('active');
    overlay.classList.add('active');
    
    updateCheckoutSummary();
}

// Fechar checkout
function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
    
    if (!document.getElementById('cartModal').classList.contains('active')) {
        document.getElementById('overlay').classList.remove('active');
    }
}

// Atualizar frete
function updateDelivery(fee) {
    deliveryFee = fee;
    updateCheckoutSummary();
}

// Atualizar resumo do checkout
function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;
    
    document.getElementById('checkoutSubtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('checkoutDelivery').textContent = `R$ ${deliveryFee.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `R$ ${total.toFixed(2)}`;
}

// Finalizar pedido
function placeOrder() {
    // Validar campos
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const neighborhood = document.getElementById('customerNeighborhood').value;
    
    if (!name || !phone || !address || !neighborhood) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Pegar método de pagamento
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Gerar número do pedido
    const orderNumber = '#' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('orderNumber').textContent = orderNumber;
    
    // Mostrar info PIX se necessário
    const pixInfo = document.getElementById('pixInfo');
    if (paymentMethod === 'pix') {
        pixInfo.style.display = 'block';
    } else {
        pixInfo.style.display = 'none';
    }
    
    // Fechar checkout e mostrar confirmação
    closeCheckout();
    
    const confirmation = document.getElementById('confirmationModal');
    const overlay = document.getElementById('overlay');
    confirmation.classList.add('active');
    overlay.classList.add('active');
    
    // Limpar carrinho
    cart = [];
    updateCart();
    
    // Limpar formulário
    document.querySelectorAll('.checkout-form input').forEach(input => {
        if (input.type === 'text' || input.type === 'tel') {
            input.value = '';
        }
    });
}

// Fechar confirmação
function closeConfirmation() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Fechar todos os modais
function closeAllModals() {
    document.getElementById('cartModal').classList.remove('active');
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('confirmationModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Scroll para menu
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Notificação
function showNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #D4AF37, #B8941F);
        color: #5D3A1A;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: bold;
        z-index: 6000;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
        font-family: 'Cinzel', serif;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar animações CSS via JS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
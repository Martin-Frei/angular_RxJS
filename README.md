# Angular RxJS Communication Demo

A practical demonstration of component-to-component communication in Angular using RxJS BehaviorSubjects.

## 🎯 About This Project

This project was created during my fullstack web development training at **Developer Akademie** to understand reactive programming with RxJS in Angular.

## 🚀 Features

### Two Parallel Data Streams

**1. String Messages**
- Simple text message communication
- `BehaviorSubject<string>`
- Real-time updates between sender and receiver

**2. Form Data Collection**
- User data collection (Name, Email, Age)
- `BehaviorSubject<UserFormData[]>`
- Persistent data array that grows with each submission

## 🛠️ Technologies

- Angular 19
- RxJS
- TypeScript
- Standalone Components
- FormsModule

## 💻 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/MartinBock1/angular-rxjs-communication-demo.git

# Navigate to project folder
cd angular-rxjs-communication-demo

# Install dependencies
npm install

# Start development server
ng serve

# Open browser at http://localhost:4200
```

## 📚 Key Concepts Demonstrated

### BehaviorSubject vs Subject
- **BehaviorSubject** stores the latest value
- New subscribers immediately receive the current state
- Perfect for state management

### Implementation Highlights
- ✅ Central service for state management
- ✅ Component communication without parent-child relationships
- ✅ Proper subscription cleanup (unsubscribe in ngOnDestroy)
- ✅ Immutable state updates
- ✅ Form validation
- ✅ Type-safe interfaces

## 🔄 How It Works
```
┌─────────────────────────────────────┐
│         Service Layer               │
│  - BehaviorSubject<string>          │
│  - BehaviorSubject<UserFormData[]>  │
└─────────────────────────────────────┘
           ↓         ↑
    subscribe    next()
           ↓         ↑
┌──────────────┬──────────────┐
│   Sender     │   Receivers  │
│  Component   │  Components  │
└──────────────┴──────────────┘
```

## 📂 Project Structure
```
src/app/
├── components/
│   ├── sender/
│   │   ├── sender.ts
│   │   ├── sender.html
│   │   └── sender.css
│   ├── receiver/
│   │   ├── receiver.ts
│   │   ├── receiver.html
│   │   └── receiver.css
│   └── receiver-form-data/
│       ├── receiver-form-data.ts
│       ├── receiver-form-data.html
│       └── receiver-form-data.css
├── service.ts
├── app.component.ts
└── app.html
```

## 🎓 Learning Outcomes

This project helped me understand:
- How BehaviorSubject maintains state
- The importance of unsubscribing from observables
- Service-based architecture in Angular
- Reactive programming patterns
- Type-safe data handling with TypeScript

## 👨‍💻 Author

**Martin Bock**
- GitHub: [@MartinFreimuth](https://github.com/Martin-Frei)
- Location: Rosenheim, Bavaria, Germany
- Training: Fullstack Developer at Developer Akademie (finishing March 2026)
- Background: Career changer with 20 years business experience

## 📝 License

This is a learning project created for educational purposes.

---

*Part of my journey from business management to fullstack development* 🚀
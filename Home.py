import tkinter as tk
import random

# Daftar pertanyaan
pertanyaan_list = [
    "Gimana kalau kita main bareng?",
    "Jalan bareng yuk?",
    "Kamu mau jadian sama aku ga?",
    "pilih aku atau aku?",
    "kamu Suka aku ga?"
]

def on_button_click():
    pertanyaan = random.choice(pertanyaan_list)
    show_custom_dialog(pertanyaan)

def show_custom_dialog(pertanyaan):
    dialog = tk.Toplevel(root)
    dialog.title("Pertanyaan")
    dialog.geometry("300x150")
    dialog.configure(bg="#dbcdf0")

    label = tk.Label(dialog, text=pertanyaan, font=("Monospace", 12), bg="#dbcdf0")
    label.pack(pady=20)

    def jawab(jawaban):
        print(f"Jawaban: {jawaban}")
        dialog.destroy()
        # Tampilkan pertanyaan baru lagi
        on_button_click()

    btn_iya = tk.Button(dialog, text="Iya", width=10, command=lambda: jawab("Iya"))
    btn_iya.pack(side="left", padx=30, pady=10)

    btn_mau = tk.Button(dialog, text="Mau aja", width=10, command=lambda: jawab("Mau aja"))
    btn_mau.pack(side="right", padx=30, pady=10)

root = tk.Tk()
root.title("My First Button")
root.geometry("300x200")
root.configure(bg="#dbcdf0")

button = tk.Button(
    root,
    text="hello pretty",
    command=on_button_click,
    font=("Monospace", 16, "bold"),
    bg="#c9e4de",
    fg="white",
    activebackground="#faedcb",
    padx=20,
    pady=10
)
button.pack(pady=40)

root.mainloop()
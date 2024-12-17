from automata.fa.nfa import NFA

from automata.base.automaton import Automaton
from automata.fa.dfa import DFA

I = 'Inactivo'
W = 'Preparar agua'
S = 'Esperando selección'
C = 'Cappuccino'
A = 'Americano'
E = 'Espresso'
T = 'Té'
M = 'Manzanilla'
C1 = 'c1'
C2 = 'c2'
C3 = 'c3'
C4 = 'c4'
C5 = 'c5'
C6 = 'c6'
A1 = 'a1'
A2 = 'a2'
A3 = 'a3'
A4 = 'a4'
A5 = 'a5'
ET1 = 'et1'
ET2 = 'et2'
ET3 = 'et3'
ET4 = 'et4'
M1 = 'm1'
M2 = 'm2'
M3 = 'm3'
CH = 'Dinero innecesario'
V = 'Dinero excedente'
X = 'Dinero insuficiente'
P = 'Preparar bebida'
F = 'Entrega'

s = 'e'  # Encendido (encender)
w = 'l'  # Llenar agua (llenar)
c = 'c'  # Cappuccino
a = 'a'  # Americano
e = 'x'  # Espresso
t = 't'  # Té
m = 'h'  # Manzanilla (hierba)
s1 = '1'  # S/1 (Dinero etapa 1)
s2 = '2'  # S/2 (Dinero etapa 2)
d = 'p'  # Pagar (pago)
v = 'r'  # Devolver dinero (return)
b = 'b'  # Bebida lista (bebida)
n = 'f'  # Bebida recogida (final)


dfa = NFA(
    states={I, W, S, C, A, E, T, M, C1, C2, C3, C4, C5, C6, A1, A2, A3, A4, A5, ET1, ET2, ET3, ET4, M1, M2, M3, CH, V, X, P, F},
    input_symbols={s, w, c, a, e, t, m, s1, s2, d, v, b, n},
    transitions={
        I: {s: {W}},
        W: {w: {S}},
        S: {c: {C}, a: {A}, e: {E}, t: {T}, m: {M}},
        C: {s1: {C1}, s2: {C2}},
        A: {s1: {A1}, s2: {A2}},
        E: {s1: {ET1}, s2: {ET2}},
        T: {s1: {ET1}, s2: {ET2}},
        M: {s1: {M1}, s2: {M2}},
        C1: {s1: {C2}, s2: {C3}, d: {X}},
        C2: {s1: {C3}, s2: {C4}, d: {X}},
        C3: {s1: {C4}, s2: {C5}, d: {X}},
        C4: {s1: {C5}, s2: {C6}, d: {X}},
        C5: {s1: {C6}, s2: {CH}, d: {X}},
        C6: {s1: {CH}, s2: {CH}, d: {P}},
        A1: {s1: {A2}, s2: {A3}, d: {X}},
        A2: {s1: {A3}, s2: {A4}, d: {X}},
        A3: {s1: {A4}, s2: {A5}, d: {X}},
        A4: {s1: {A5}, s2: {CH}, d: {X}},
        A5: {s1: {CH}, s2: {CH}, d: {P}},
        ET1: {s1: {ET2}, s2: {ET3}, d: {X}},
        ET2: {s1: {ET3}, s2: {ET4}, d: {X}},
        ET3: {s1: {ET4}, s2: {CH}, d: {X}},
        ET4: {s1: {CH}, s2: {CH}, d: {P}},
        M1: {s1: {M2}, s2: {M3}, d: {X}},
        M2: {s1: {M3}, s2: {CH}, d: {X}},
        M3: {s1: {CH}, s2: {CH}, d: {P}},
        CH: {s1: {CH}, s2: {CH}, d: {V}},
        X: {v: {S}},
        V: {v: {P}},
        P: {b: {F}},
        F: {n: {S}}
    },
    initial_state=I,
    final_states={S}
)

